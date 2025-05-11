import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function Articles() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const articles = [
    {
      title: "Authentication  [Comming Soon!!]",
      date: "12-05-2025",
      link: "/articles/authentication",
    },
    {
      title: "Access Control",
      date: "02-05-2025",
      link: "/articles/access-control-1",
    },
    {
      title: "Linux Cheatsheet",
      date: "30-04-2025",
      link: "/articles/linux-Cheatsheet",
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-900 font-mono min-h-screen">
      <Header toggleMenu={toggleMenu} />
      {menuOpen && <MobileMenu />}

      <main className="max-w-3xl mx-auto p-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl font-bold mt-6 text-sky-600"
        >
          Articles
        </motion.h2>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-4 space-y-4"
        >
          {articles.map((article, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-4 bg-white shadow hover:shadow-md rounded-lg transition duration-300"
            >
              <div className="flex items-center gap-2 text-gray-500">
                <FileText className="w-5 h-5 text-sky-600" />
                <span>{article.date}</span>
              </div>
              <Link
                to={article.link}
                className="block text-sky-800 hover:underline mt-2 text-lg font-semibold"
              >
                {article.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </main>

      <Footer />
    </div>
  );
}
