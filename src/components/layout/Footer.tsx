import Image from 'next/image';
import React, { useState } from 'react';
import { FaEnvelope, FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaYoutube } from "react-icons/fa";
import { Button } from '../ui/button';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="w-full bg-[#041738] py-2 border-t border-gray-200">
      <div className="px-6">
        <div className="flex justify-between items-center mb-4 gap-y-3">
          <div className="flex items-center py-1">
            <Image
              src="/logo_footer.png"
              alt="Logo"
              width={70}
              height={70}
            />
          </div>
          <div className="text-gray-500 font-light text-center">
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noreferrer" className="bg-white p-2 rounded-full">
                <FaFacebookF size={18} className="text-[#041738]" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="bg-white p-2 rounded-full">
                <FaGooglePlusG size={18} className="text-[#041738]" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="bg-white p-2 rounded-full">
                <FaLinkedinIn size={18} className="text-[#041738]" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="bg-white p-2 rounded-full">
                <FaYoutube size={18} className="text-[#041738]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <h4 className="font-bold text-lg text-white mb-4 text-start">Our address</h4>
              <ul className="space-y-2 text-white">
                <li className="flex items-center gap-2">
                  <span><FaEnvelope /></span>
                  <a href="mailto:career@tickets.com" className="hover:text-gray-300">
                    career@tickets.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span><FaMapMarkerAlt /></span>
                  89 KG 14 Ave, Kigali
                </li>
                <li className="flex items-center gap-2">
                  <span><FaPhone /></span>
                  <a href="tel:+250700000" className="hover:text-gray-300">
                    +250 700 000
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-bold mb-4 text-start text-white">Quick Links</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-white font-bold mb-4 text-lg text-center">Join our newsletter to keep up to date with us!</h4>

              <div className="w-full flex items-center justify-center bg-white p-1 rounded-lg">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-none rounded-lg focus:outline-none focus:border-none"
                />
                <Button
                  className="w-3/5 bg-blue-500 text-white text-sm  rounded-lg font-bold hover:bg-blue-600"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 py-2 flex justify-between items-center">
          <div className="text-center text-white text-sm">
            Copyright &copy; All Rights Reserved SawaPay 2024.
          </div>
          <div className='text-white'>
            Privacy Policy  | Terms and Conditions
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
