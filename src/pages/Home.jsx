import Header from '../components/Header'; 
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // for animations
import { Monitor, FileText, GitBranch, BookOpenCheck, StickyNote } from 'lucide-react'; // added icons

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 font-mono min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto p-4">
        {/* Animated title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-base sm:text-lg">
            Security Researcher 🕵🏻‍♂️{' '}
            <Link
              to="/resume"
              className="text-gray-800 hover:underline font-semibold"
            >
              [Hire Me]
            </Link>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mt-6 text-sky-600">
            Recent Updates...
          </h2>
        </motion.div>

        {/* Animated update list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:space-x-4 items-center">
            <Monitor className="text-sky-600 w-6 h-6" />
            <span className="text-gray-500">12-05-2025</span>
            <a href="/articles/access-control-1" className="text-sky-800 hover:underline">
              Access Control
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-4 items-center">
            <GitBranch className="text-green-600 w-6 h-6" />
            <span className="text-gray-500">01-05-2025</span>
            <a href="/articles/github-finder" className="text-sky-800 hover:underline">
              Github Finder
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-4 items-center">
            <FileText className="text-yellow-600 w-6 h-6" />
            <span className="text-gray-500">05-03-2025</span>
            <a href="/articles/linux-cheatsheet" className="text-sky-800 hover:underline">
              Linux Cheatsheet
            </a>
          </div>
        </motion.div>

{/* 🔥 Bug Bounty Resources Section - Styled like Section 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 space-y-4"
        >


  <h2 className="text-xl sm:text-2xl font-bold text-rose-600">
    Web Security Resources 📚
  </h2>

  <div className="flex flex-col sm:flex-row sm:space-x-4 items-center">
    <StickyNote className="text-rose-600 w-6 h-6" />
    <Link
      to="/resources/notes"
      className="text-rose-800 hover:underline"
    >
      Bug Bounty Notes
    </Link>
  </div>
  <div className="flex flex-col sm:flex-row sm:space-x-4 items-center">
    <FileText className="text-rose-600 w-6 h-6" />
    <Link
      to="/resources/cheatsheets"
      className="text-rose-800 hover:underline"
    >
      Cheatsheets
    </Link>
  </div>
  <div className="flex flex-col sm:flex-row sm:space-x-4 items-center">
    <BookOpenCheck className="text-rose-600 w-6 h-6" />
    <Link
      to="/resources/payloads"
      className="text-rose-800 hover:underline"
    >
      Payload Collection
    </Link>
  </div>
</motion.div>
      </main>
      <Footer />
    </div>
  );
}
