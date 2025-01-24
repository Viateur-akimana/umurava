'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-800">Umurava</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Home
            </Link>
            <Link href="/web/pages/challenges" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Challenges & Hackathons
            </Link>
            <Link href="/web/pages/education" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              For Learning Institutions
            </Link>
            <Link href="/web/pages/about" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              About Us
            </Link>
            <Link href="/web/pages/contact" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Contact Us
            </Link>
            <Link href="/join" className="block px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Join the Program
            </Link>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Home
            </Link>
            <Link href="/web/pages/challenges" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Challenges & Hackathons
            </Link>
            <Link href="/web/pages/education" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              For Learning Institutions
            </Link>
            <Link href="/web/pages/about" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              About Us
            </Link>
            <Link href="/web/pages/contact" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Contact Us
            </Link>
            <Link href="/join" className="block px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Join the Program
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default NavBar;