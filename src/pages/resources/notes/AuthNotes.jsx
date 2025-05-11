import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MobileMenu from "../../../components/MobileMenu";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthNotes() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

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
          Authentication Notes
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 space-y-4"
        >
          <p>
            Authentication is the process of verifying the identity of a user or system. In web applications, it is
            typically handled using tokens, cookies, or sessions.
          </p>

          <h2 className="text-xl font-semibold text-blue-500">🔐 Common Authentication Methods</h2>
          <ul className="list-disc list-inside">
            <li><strong>Basic Auth:</strong> Transmits username and password in Base64 encoded format.</li>
            <li><strong>Form-based Auth:</strong> Most common method with login forms.</li>
            <li><strong>Token-based Auth:</strong> Uses JWT (JSON Web Tokens) or opaque tokens.</li>
            <li><strong>OAuth:</strong> Delegated access using third-party credentials.</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-500">🔎 Things to Look for in Bug Hunting</h2>
          <ul className="list-disc list-inside">
            <li>Weak password policies</li>
            <li>Token leakage via URL or referrer</li>
            <li>Improper implementation of OAuth</li>
            <li>Session fixation or lack of session invalidation</li>
            <li>Missing HttpOnly or Secure flags on cookies</li>
            <li>Improper use of multi-factor authentication</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-500">📚 Tips</h2>
          <ul className="list-disc list-inside">
            <li>Always inspect login requests in the browser dev tools</li>
            <li>Test if tokens are reusable after logout</li>
            <li>Check if password reset flows expose user data</li>
          </ul>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
