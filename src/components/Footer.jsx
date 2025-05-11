export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto py-6 px-4 text-center text-gray-500">
      <p className="text-sm sm:text-base">© 2025 by Samarth. All rights reserved.</p>
      <nav className="mt-2 text-sky-600 flex flex-wrap justify-center space-x-2 text-sm sm:text-base">
        <a href="/" className="hover:underline">Home</a> |
        <a href="/articles" className="hover:underline">Articles</a> |
        <a href="/resources" className="hover:underline">Resources</a> |
        <a href="/Services" className="hover:underline">Services</a> |
        <a href="/about" className="hover:underline">About</a>
      </nav>
    </footer>
  );
}
