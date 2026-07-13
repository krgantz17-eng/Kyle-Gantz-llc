'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Kyle Gantz LLC
        </Link>
        <div className="flex gap-8">
          <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
            Portfolio
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}