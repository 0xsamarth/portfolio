import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Monitor,
  FileText,
  GitBranch,
  BookOpenCheck,
  StickyNote
} from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Helmet } from 'react-helmet-async';


function Card({ icon, date, title, link, theme = 'sky' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-start bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 p-5 rounded-xl shadow-sm hover:shadow-lg transition"
      role="article"
      aria-labelledby={`card-${title}`}
    >
      {icon}
      <div className="ml-4">
        {date && <p className="text-sm text-gray-400">{date}</p>}
        <Link
          to={link}
          id={`card-${title}`}
          className={`text-lg font-medium text-${theme}-800 dark:text-${theme}-300 hover:underline`}
          aria-label={`Read more about ${title}`}
        >
          {title}
        </Link>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [text] = useTypewriter({
    words: [
      'Web Security Researcher',
      'Ethical Hacker',
      'Bug Bounty Hunter',
      'Red Teamer'
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 60,
    delaySpeed: 2500
  });

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-mono min-h-screen transition-colors duration-500">
      <Helmet>
        <title>Samarth Aher | Web Security Enthusiast</title>
        <meta name="description" content="Ethical hacker, bug bounty hunter, red teamer. Discover Samarth's latest work and resources." />
      </Helmet>

      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
          role="region"
          aria-labelledby="hero-heading"
        >
          <h1 id="hero-heading" className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight sm:leading-[1.2] py-2">
            {text === 'Red Teamer' ? (
              <span className="text-red-600">{text}</span>
            ) : (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-400">
                {text}
              </span>
            )}
            <Cursor cursorStyle="_" />
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passion for breaking things, love for fixing them 🔍✨
          </p>

          
        </motion.section>

        {/* Updates Section */}
        <section className="mt-24" role="region" aria-labelledby="updates-heading">
          <h2 id="updates-heading" className="text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200">🗞️ Latest Updates</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Monitor className="text-sky-500 w-6 h-6" />,
                date: '12-05-2025',
                title: 'Access Control',
                link: '/articles/access-control-1',
              },
              {
                icon: <GitBranch className="text-green-500 w-6 h-6" />,
                date: '01-05-2025',
                title: 'Github Finder',
                link: '/tools/git',
              },
              {
                icon: <FileText className="text-yellow-500 w-6 h-6" />,
                date: '05-03-2025',
                title: 'Linux Cheatsheet',
                link: '/articles/linux-cheatsheet',
              },
              {
                icon: <Monitor className="text-sky-500 w-6 h-6" />,
                date: '01-06-2025',
                title: 'JS Beautifier',
                link: '/tools/beautifier',
              }
            ].map((item, i) => (
              <Card key={i} {...item} theme="sky" />
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mt-24" role="region" aria-labelledby="resources-heading">
          <h2 id="resources-heading" className="text-3xl font-semibold mb-8 text-rose-600 dark:text-pink-400">📚 Web Security Resources</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <StickyNote className="text-rose-500 w-6 h-6" />,
                title: 'Bug Bounty Notes',
                link: '/resources/notes',
              },
              {
                icon: <FileText className="text-rose-500 w-6 h-6" />,
                title: 'Cheatsheets',
                link: '/resources/cheatsheets',
              },
              {
                icon: <BookOpenCheck className="text-rose-500 w-6 h-6" />,
                title: 'Payload Collection',
                link: '/resources/payloads',
              },
            ].map((item, i) => (
              <Card key={i} {...item} theme="rose" />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
