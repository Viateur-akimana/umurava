'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:flex-none md:justify-around flex justify-between">
        <div className="w-full flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={140}
                height={150}
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex">
              <Link href="/" className="block px-3 py-2 rounded-md text-gray-600 font-semibold hover:text-gray-900">
                Home
              </Link>
              <Link href="/web/pages/challenges" className="block px-3 py-2 rounded-md text-gray-600 font-semibold hover:text-gray-900">
                Challenges & Hackathons
              </Link>
              <Link href="/web/pages/education" className="block px-3 py-2 rounded-md text-gray-600 font-semibold hover:text-gray-900">
                For Learning Institutions
              </Link>
              <Link href="/web/pages/about" className="block px-3 py-2 rounded-md text-gray-600 font-semibold hover:text-gray-900">
                About Us
              </Link>
              <Link href="/web/pages/contact" className="block px-3 py-2 rounded-md text-gray-600 font-semibold hover:text-gray-900">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link href="/join" className="block px-4 py-2 rounded-md text-white bg-[#041738] hover:bg-[#041738]">
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link href="/" className="block px-3 py-2 rounded-md text-gray-600 font-semibold hover:text-gray-900">
              Home
            </Link>
            <Link href="/web/pages/challenges" className="block px-3 py-2 rounded-md text-gray-600 font-semibold hover:text-gray-900">
              Challenges & Hackathons
            </Link>
            <Link href="/web/pages/education" className="block px-3 py-2 rounded-md text-gray-600 font-semibold hover:text-gray-900">
              For Learning Institutions
            </Link>
            <Link href="/web/pages/about" className="block px-3 py-2 rounded-md text-gray-600 font-semibold hover:text-gray-900">
              About Us
            </Link>
            <Link href="/web/pages/contact" className="block px-3 py-2 rounded-md text-gray-600 font-semibold hover:text-gray-900">
              Contact Us
            </Link>
            <Link href="/join" className="block px-4 py-2 rounded-md text-white bg-[#041738] hover:bg-[#12274d]">
              Join the Program
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default NavBar;