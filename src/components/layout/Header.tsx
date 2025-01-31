'use client'
import React, { useState } from 'react';
import { FaBell, FaUser, FaSearch } from 'react-icons/fa';

const Header = () => {
  const [term, setTerm] = useState("")
  return (
    <div className="flex items-center justify-between gap-3 bg-white lg:px-4 md:px-4 px-2 py-4">
      <div className="relative w-full max-w-2xl mr-2">
        <FaSearch className="absolute left-4 top-3 text-gray-600" />
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="Search here..."
          className="border rounded-lg p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F9FAFB] w-full"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-3 rounded-full bg-gray-200">
          <FaBell />
        </button>
        <button className="p-3 rounded-full bg-gray-200">
          <FaUser />
        </button>
      </div>
    </div>
  );
};

export default Header;