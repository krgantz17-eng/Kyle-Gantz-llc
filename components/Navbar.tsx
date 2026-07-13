import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Kyle Gantz LLC
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="#services" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link 
              href="#portfolio" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
