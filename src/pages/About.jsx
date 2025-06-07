import { useState } from 'react';
import { FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-mono min-h-screen transition-colors duration-500">
      <Helmet>
        <title>About</title>
        <meta name="description" content="Learn more about Samarth Aher, a passionate web security researcher and ethical hacker recognized by companies like Google and Pinterest." />
      </Helmet>
      <Header toggleMenu={toggleMenu} />
      {menuOpen && <div className="fixed inset-0 bg-black bg-opacity-30 z-20"></div>}

      <main className="max-w-4xl mx-auto px-6 py-10 sm:py-16">
        <motion.h1
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8 text-gray-800 dark:text-gray-200"
>
  About Me
</motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg sm:text-xl max-w-prose mb-6 leading-relaxed"
        >
          Hi, I'm <strong>Samarth Aher</strong>, a Security Researcher from India with expertise in Web, Network, and API Security.
          I help identify vulnerabilities, strengthen defenses, and contribute to a safer internet. My passion lies in ethical hacking and cybersecurity education.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg mb-10"
        >
          Connect with me:{' '}
          <a href="https://x.com/samarth0x01" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-500 dark:hover:text-sky-300 mr-4 inline-block">
            <FaTwitter className="inline w-6 h-6" />
          </a>
          <a href="mailto:0xsamarth@gmail.com" className="text-gray-600 hover:text-gray-500 dark:hover:text-gray-300 mr-4 inline-block">
            <FaEnvelope className="inline w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/samarth.aher" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-500 dark:hover:text-sky-300 mr-4 inline-block">
            <FaInstagram className="inline w-6 h-6" />
          </a>
          <Link to="/resume" className="text-gray-800 dark:text-gray-300 hover:underline font-semibold inline-block ml-2">
            [Download my Resume]
          </Link>
        </motion.p>

        <motion.h2
  className="text-2xl font-semibold mt-12 text-gray-800 dark:text-gray-200"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.7 }}
>
  My Skills
</motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-6 space-y-3 text-gray-800 dark:text-gray-300 max-w-prose"
        >
          {[
            'Web Application Security (XSS, SQLi, IDOR, CSRF, etc.)',
            'API Security Testing (JWT, Broken Auth, Rate Limiting)',
            'Network Penetration Testing (Nmap, Wireshark, etc.)',
            'Burp Suite, OWASP ZAP',
            'Linux & Bash Scripting',
            'HTML, CSS, JavaScript (Frontend Security)',
            'Python & Flask for Automation'
          ].map((skill, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
              <span>{skill}</span>
            </li>
          ))}
        </motion.ul>

        <motion.h2
  className="text-2xl font-semibold mt-14 text-gray-800 dark:text-gray-200 flex items-center gap-3"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.7 }}
>
  <Trophy className="w-6 h-6" /> Hall of Fame Recognition
</motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 space-y-4 max-w-prose text-gray-800 dark:text-gray-300"
        >
          {[
            { year: '2025', name: 'Google' },
            { year: '2025', name: 'T-Mobile' },
            { year: '2024', name: 'Pinterest' },
            { year: '2023', name: 'Dutch Government' },
            { year: '2023', name: 'Fossil' }
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-5">
              <span className="text-sm text-gray-500 dark:text-gray-400 w-16">{item.year}</span>
              <a href="#" className="hover:underline">
                {item.name}
              </a>
            </div>
          ))}
        </motion.div>

        <motion.h2
  className="text-2xl font-semibold mt-14 text-gray-800 dark:text-gray-200"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.7, duration: 0.7 }}
>
  Certifications
</motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-6 space-y-3 text-gray-800 dark:text-gray-300 max-w-prose"
        >
          {[
            'Cybrary: Introduction to IT & Cyber Security',
            'Certified Red Team Professional (CRTP) [In Progress]',
            'Offesive Security Certified Professional (OSCP) [In Progress]',
          ].map((cert, i) => (
            <li key={i} className="flex items-center gap-3">
              <Award className="w-5 h-5 text-yellow-500 dark:text-yellow-400 flex-shrink-0" />
              <span>{cert}</span>
            </li>
          ))}
        </motion.ul>
      </main>

      <Footer />
    </div>
  );
}
