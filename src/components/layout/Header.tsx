import React from 'react'
import { FaBell, FaUser, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Search here..." 
            className="border rounded-lg p-2 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F9FAFB] w-full"
          />
          <FaSearch className="absolute left-2 top-2 text-gray-400" />
        </div>
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
  )
}

export default Header
