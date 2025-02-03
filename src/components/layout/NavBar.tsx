'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white">
      <div className=" lg:mx-8 mx-0 px-4 sm:px-6 xl:px-8 lg:px-0 pt-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={140}
              height={150}
              className='hidden xl:block lg:hidden sm:block'
            />
            <Image
              src="/blue-logo.png"
              alt="logo"
              width={50}
              height={50}
              className='block md:hidden lg:block xl:hidden sm:hidden'
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-3">
          <Link href="/" className={`block px-3 py-2 rounded-md font-semibold text-nowrap ${pathname === '/' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
            Home
          </Link>
          <Link href="/web/pages/challenges" className={`block px-3 py-2 rounded-md font-semibold text-nowrap ${pathname === '/web/pages/challenges' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
            Challenges & Hackathons
          </Link>
          <Link href="/web/pages/education" className={`block px-3 py-2 rounded-md font-semibold text-nowrap ${pathname === '/web/pages/education' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
            For Learning Institutions
          </Link>
          <Link href="/web/pages/about" className={`block px-3 py-2 rounded-md font-semibold text-nowrap ${pathname === '/web/pages/about' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
            About Us
          </Link>
          <Link href="/web/pages/contact" className={`block px-3 py-2 rounded-md font-semibold text-nowrap ${pathname === '/web/pages/contact' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
            Contact Us
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <Link href="/login" className="block px-4 py-2 rounded-md text-white bg-[#041738] hover:bg-[#12274d] text-nowrap">
            Join the Program
          </Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link href="/" className={`block px-3 py-2 rounded-md font-semibold text-nowrap ${pathname === '/' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
              Home
            </Link>
            <Link href="/web/pages/challenges" className={`block px-3 py-2 rounded-md font-semibold text-nowrap ${pathname === '/web/pages/challenges' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
              Challenges & Hackathons
            </Link>
            <Link href="/web/pages/education" className={`block px-3 py-2 rounded-md font-semibold text-nowrap ${pathname === '/web/pages/education' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
              For Learning Institutions
            </Link>
            <Link href="/web/pages/about" className={`block px-3 py-2 rounded-md font-semibold text-nowrap ${pathname === '/web/pages/about' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
              About Us
            </Link>
            <Link href="/web/pages/contact" className={`block px-3 py-2 rounded-md font-semibold text-nowrap ${pathname === '/web/pages/contact' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
              Contact Us
            </Link>
            <Link href="/login" className="block px-4 py-2 rounded-md text-white bg-[#041738] hover:bg-[#12274d]">
              Join the Program
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
