import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function Payloads() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const payloads = [
        {
      title: "SQLi Payloads [Comming Soon]",
      date: "20-05-2025",
      link: "/resources/payloads/",
    },
    {
      title: "XSS Payloads",
      date: "05-05-2025",
      link: "/resources/payloads/xss",
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
          className="text-2xl font-bold mt-6 text-red-600"
        >
          Payloads
        </motion.h2>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="mt-4 space-y-4"
        >
          {payloads.map((payload, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-4 bg-white shadow hover:shadow-md rounded-lg transition duration-300"
            >
              <div className="flex items-center gap-2 text-gray-500">
                <FileText className="w-5 h-5 text-red-600" />
                <span>{payload.date}</span>
              </div>
              <Link
                to={payload.link}
                className="block text-red-800 hover:underline mt-2 text-lg font-semibold"
              >
                {payload.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </main>

      <Footer />
    </div>
  );
}
