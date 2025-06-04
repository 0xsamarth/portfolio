import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto py-8 px-6 text-center text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 transition-colors duration-300">
      <p className="text-sm sm:text-base">
        © 2025 by Samarth. All rights reserved.
      </p>

      <div className="mt-6 flex justify-center space-x-6">
        <a
          href="mailto:0xsamarth@gmail.com"
          aria-label="Email"
          className="hover:text-pink-500 dark:hover:text-pink-400 transition"
        >
          <Mail className="w-6 h-6" />
        </a>
        <a
          href="https://instagram.com/0xsamarth"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-gray-800 dark:hover:text-gray-200 transition"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/0xsamarth"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/0xsamarth"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-sky-500 dark:hover:text-sky-400 transition"
        >
          <Twitter className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}
