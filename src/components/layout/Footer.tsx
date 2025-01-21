import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-white text-blue-900 rounded-full w-12 h-12 flex items-center justify-center">
                <span className="font-bold text-xl">G</span>
              </div>
            </div>
            <ul>
              <li className="mb-2">
                <span className="font-bold"></span> career@tickets.com
              </li>
              <li className="mb-2">
                <span className="font-bold"></span> 89 KG 14 Ave, Kigali
              </li>
              <li>
                <span className="font-bold"></span> +250 700 000
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Program
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">
              Join our newsletter to keep up to date with us!
            </h3>
            <form className="flex flex-col lg:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full lg:w-auto px-4 py-2 rounded-md text-blue-900 outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />
        <div className="flex flex-col lg:flex-row items-center justify-between text-sm">
          <p>Copyright © All Rights Reserved SawaPay 2024.</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
