export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-xl font-bold text-blue-400">
          Kyle Gantz LLC
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#services" className="hover:text-blue-400">
            Services
          </a>

          <a href="#about" className="hover:text-blue-400">
            About
          </a>

          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}