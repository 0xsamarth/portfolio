import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Tools() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const resources = [
    {
      title: "🧼 JS Beautifier",
      date: "10-05-2025",
      link: "/tools/beautifier",
    },
    {
      title: "📄 Git Finder",
      date: "09-05-2025",
      link: "/tools/git",
    },
    {
      title: "💥 Subdomain Enumeration",
      date: "08-05-2025",
      link: "/tools",
    },
  ];

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-mono min-h-screen transition-colors duration-500">
      <Helmet>
        <title>Tools</title>
        <meta name="description" content="Explore free web security resources, notes, payloads, and cheatsheets created by Samarth Aher." />
      </Helmet>

      <Header toggleMenu={toggleMenu} />
      {menuOpen && <MobileMenu />}

      <main className="max-w-4xl mx-auto p-6 sm:p-10">
        <motion.h1
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8 text-gray-800 dark:text-gray-200"
>
  Resources
</motion.h1>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="mt-8 space-y-6"
        >
          {resources.map((resource, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-5"
            >
              <div className="flex items-center gap-3 text-gray-500 dark:text-blue-100 font-semibold text-sm uppercase tracking-wide">
                <FileText className="w-6 h-6" />
                <span>{resource.date}</span>
              </div>
              <Link
                to={resource.link}
                className="mt-2 block text-gray-800 dark:text-gray-300 text-xl font-semibold"
              >
                {resource.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </main>

      <Footer />
    </div>
  );
}