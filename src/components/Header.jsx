import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaSun, FaMoon, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Articles', path: '/articles' },
    { name: 'Resources', path: '/resources' },
    { name: 'Tools', path: '/tools' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed w-full z-50 bg-gray-100 dark:bg-[#0f0f0f] backdrop-blur-sm shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              src="./Images/logo.JPG"
              alt="Logo"
              className="w-10 h-10 rounded-full border border-gray-400 shadow-sm"
            />
            <span className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white tracking-tight">
              Samarth Aher
            </span>
          </Link>

          <nav className="hidden md:flex space-x-6 text-base font-medium">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`relative px-2 py-1 transition duration-300 ${
                  location.pathname === path
                    ? 'text-gray-800 dark:text-gray-100 after:w-full'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                } after:transition-all after:duration-300 after:block after:h-[2px] after:bg-gray-600 after:scale-x-0 hover:after:scale-x-100 after:origin-left`}
              >
                {name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
                className="pl-10 pr-4 py-2 rounded-md bg-zinc-200 dark:bg-zinc-800 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-300" />
            </div>

            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-yellow-300 hover:scale-110 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl text-gray-700 dark:text-gray-300"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </motion.header>

      <div className="pt-20" />

      {menuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-100 dark:bg-[#0f0f0f] px-6 py-4 shadow-md fixed top-20 w-full z-40"
        >
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
              className="w-full pl-10 pr-4 py-2 rounded-md bg-zinc-200 dark:bg-zinc-800 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500 dark:text-gray-300" />
          </div>
          <ul className="space-y-4">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`block text-lg font-medium ${
                  location.pathname === path
                    ? 'text-gray-800 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {name}
              </Link>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}
