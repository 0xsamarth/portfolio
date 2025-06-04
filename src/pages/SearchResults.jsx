import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { title } from "framer-motion/client";

const allItems = [
  // 🔍 Add all searchable content here
  { title: "Access Control", link: "/articles/access-control-1", type: "Article" },
  { title: "Linux Cheatsheet", link: "/articles/linux-cheatsheet", type: "Article" },
  {title: "Github Finder", link:"/articles/github-finder", type: "Article"},

  { title: "Authentication", link: "/resources/notes/auth", type: "Resource" },
  { title: "Bug Bounty Notes", link: "/resources/notes", type: "Resource" },
  { title: "Payload Collection", link: "/resources/payloads", type: "Resource" },
  { title: "Cheatsheets", link: "/resources/cheatsheets", type: "Resource" },

  {title: "", link:"", type: ""},
  {title: "", link:"", type: ""},
  {title: "", link:"", type: ""},
];

export default function SearchResults() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q")?.toLowerCase() || "";

  const results = useMemo(() => {
    return allItems.filter(item =>
      item.title.toLowerCase().includes(query)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white">
      <Helmet>
        <title>Search Results | Samarth Aher</title>
        <meta name="description" content={`Search results for ${query}`} />
      </Helmet>
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Results for: <span className="text-sky-500">"{query}"</span></h1>
        {results.length ? (
          <ul className="space-y-4">
            {results.map((item, i) => (
              <li key={i} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
                <a href={item.link} className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  {item.title}
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.type}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
