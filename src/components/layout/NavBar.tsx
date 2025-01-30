'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => pathname === href;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/web/pages/challenges', label: 'Challenge & Hackthons' },
    { href: '/web/pages/education', label: 'For Educational Institutions' },
    { href: '/web/pages/about', label: 'About Us' },
    { href: '/web/pages/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="font-['Work_Sans'] ">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 justify-between  items-center">
          <div className="flex items-center pl-8 ml-20">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Umurava Logo"
                width={155}
                height={43}
                className="font-bold text-xl"
              />
            </Link>
          </div>

          <div className=" hidden font-medium md:flex items-center gap-12 text-[#2B333] text-lg font-dm-sans ">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base ${isActiveLink(link.href) ? 'text-[#2B71F0]' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:flex  items-center">
            <Link 
              href="/join" 
              className="inline-block px-8 py-3 bg-[#041738] mr-20 font-semibold text-white rounded transition-colors"
            >
              Join the Program
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden py-6">
            <div className="flex flex-col space-y-6 text-[#2B3338] text-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base ${isActiveLink(link.href) ? 'text-blue-600' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/join" 
                className="inline-block px-8 py-3 bg-[#041738] font-semibold text-white rounded transition-colors"
              >
                Join the Program
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
