import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';
import { FaBars, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="max-w-3xl mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            src="/Images/logo.JPG"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold"
          >
            <a href="/">Samarth Aher</a>
          </motion.h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-sky-600 focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4 text-sky-600">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/articles" className="hover:underline">Articles</a></li>
            <li><a href="/resources" className="hover:underline">Resources</a></li>

            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </nav>
      </header>
      {menuOpen && <MobileMenu />}
    </>
  );
}