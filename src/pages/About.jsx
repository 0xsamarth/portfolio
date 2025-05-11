import { useState } from 'react';
import { FaBars, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen font-mono text-gray-900 bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-sky-700 mb-6"
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-base mb-4"
        >
          Hi, I'm <strong>Samarth Aher</strong>, a Security Researcher from India with expertise in Web, Network, and API Security.
          I help identify vulnerabilities, strengthen defenses, and contribute to a safer internet. My passion lies in ethical hacking and cybersecurity education.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base mb-6"
        >
          Connect with me:{' '}
          <a href="https://x.com/samarth0x01" target="_blank" rel="noopener noreferrer" className="text-sky-600">
            <FaTwitter className="inline mr-3" />
          </a>
          <a href="mailto:0xsamarth@gmail.com" className="text-sky-600">
            <FaEnvelope className="inline mr-3" />
          </a>
          <a href="https://www.instagram.com/samarth.aher" target="_blank" rel="noopener noreferrer" className="text-sky-600">
            <FaInstagram className="inline mr-3" />
          </a>
          <Link to="/resume" className="text-gray-800 hover:underline font-semibold">
            [Download my Resume]
          </Link>
        </motion.p>

        {/* My Skills Section */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl font-semibold mt-10 text-sky-600"
        >
          My Skills
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 space-y-2 text-gray-800"
        >
          {[
            'Web Application Security (XSS, SQLi, IDOR, CSRF, etc.)',
            'API Security Testing (JWT, Broken Auth, Rate Limiting)',
            'Network Penetration Testing (Nmap, Wireshark, etc.)',
            'Burp Suite, OWASP ZAP',
            'Linux & Bash Scripting',
            'HTML, CSS, JavaScript (Frontend Security)',
            'Python & Flask for Automation',
          ].map((skill, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              {skill}
            </li>
          ))}
        </motion.ul>

        {/* Hall of Fame Section */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl font-semibold mt-10 text-sky-600 flex items-center gap-2"
        >
          <Trophy className="w-5 h-5" /> Hall of Fame Recognition
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 space-y-3"
        >
          {[
            { year: '2025', name: 'Google' },
            { year: '2025', name: 'T-Mobile' },
            { year: '2024', name: 'Pinterest' },
            { year: '2023', name: 'Dutch Government' },
            { year: '2023', name: 'Fossil' },
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-4 text-gray-800">
              <span className="text-sm text-gray-500">{item.year}</span>
              <a href="#" className="text-gray-800 hover:underline">{item.name}</a>
            </div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xl font-semibold mt-10 text-sky-600"
        >
          Certifications
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-4 space-y-2 text-gray-800"
        >
          {[
            'eLearnSecurity Junior Penetration Tester (eJPT)',
            'TryHackMe: Offensive Pentesting Path',
            'Google Cybersecurity Certificate',
            'Linux Essentials Certification',
          ].map((cert, i) => (
            <li key={i} className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-500" />
              {cert}
            </li>
          ))}
        </motion.ul>
      </main>

      <Footer />
    </div>
  );
}
