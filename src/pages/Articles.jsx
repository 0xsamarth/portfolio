import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CVEFeed = () => {
  const [cves, setCves] = useState([]);

  useEffect(() => {
    const fetchCVEs = async () => {
      try {
        const res = await fetch("https://services.nvd.nist.gov/rest/json/cves/2.0?resultsPerPage=5");
        const data = await res.json();
        setCves(data.vulnerabilities || []);
      } catch (error) {
        console.error("Failed to fetch CVEs:", error);
      }
    };
    fetchCVEs();
  }, []);

  return (
    <section className="mb-24">
      <div className="bg-gradient-to-br from-blue-50 dark:from-zinc-800 to-white dark:to-zinc-900 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-100">
          🧠 Live Threat Intelligence Feed
        </h3>
        <p className="text-center mb-4 text-gray-600 dark:text-gray-400">
          Stay updated with the latest security vulnerabilities from the National Vulnerability Database.
        </p>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {cves.map((item, index) => {
            const cve = item.cve;
            return (
              <li key={index} className="py-4">
                <a
                  href={`https://nvd.nist.gov/vuln/detail/${cve.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  {cve.id}
                </a>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  {cve.descriptions[0]?.value?.slice(0, 120) || "No description"}...
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default function Articles() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const articles = [
    {
      title: "Authentication  [Coming Soon!!]",
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
      link: "/articles/linux-cheatsheet",
    }
  ];

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-mono min-h-screen transition-colors duration-500">
      <Helmet>
        <title>Articles</title>
        <meta name="description" content="Read the latest cybersecurity articles by Samarth Aher. Topics include Access Control, Authentication, Linux, and more." />
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
  Articles
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

          {articles.map((article, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-5"
            >
              <div className="flex items-center gap-3 text-gray-400 dark:text-blue-100 font-semibold text-sm uppercase tracking-wide">
                <FileText className="w-6 h-6" />
                <span>{article.date}</span>
              </div>
              <Link
                to={article.link}
                className="mt-2 block text-gray-800 dark:text-gray-300 text-xl font-semibold"
              >
                {article.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        <p className="mb-10"></p>
        {/* CVE Feed */}
        <CVEFeed />
      </main>
      <Footer />
    </div>
  );
}
