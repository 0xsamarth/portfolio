export default function MobileMenu() {
  return (
    <nav className="md:hidden px-4 pb-4">
      <ul className="space-y-2 text-sky-600 text-base">
        <li><a href="/" className="block hover:underline">Home</a></li>
        <li><a href="/articles" className="block hover:underline">Articles</a></li>
        <li><a href="/Services" className="hover:underline">Services</a></li>
        <li><a href="/about" className="block hover:underline">About</a></li>
      </ul>
    </nav>
  );
}
