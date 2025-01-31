import Image from 'next/image';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Stats = () => {
  return (
    <div className="flex justify-center w-full px-4 md:px-0">
      <div className="relative w-full md:w-[1422px] bg-blue-500 p-6 md:p-14 rounded-lg my-6 md:m-10">
        <Image
          src="/ellipse1.png"
          alt="hero image"
          width={220}
          height={80}
          className="absolute right-0 top-0 w-[120px] md:w-[220px] h-auto"
        />
        <Image
          src="/ellipse2.png"
          alt="hero image"
          width={300}
          height={80}
          className="absolute left-3 bottom-0 w-[160px] md:w-[300px] h-auto"
        />
        
        <div className="grid grid-cols-2 gap-y-8 md:flex md:justify-around md:items-center">
          <div className="text-white flex flex-col items-center md:items-start">
            <span className="text-base md:text-3xl font-bold">1</span>
            <span className="text-sm">Year</span>
          </div>

          <div className="text-white flex flex-col items-center md:items-start">
            <span className="flex items-center text-base md:text-3xl font-bold">
              500
              <FaPlus size={18} className="ml-2" />
            </span>
            <span className="text-sm">Challenges Completed</span>
          </div>

          <div className="text-white flex flex-col items-center md:items-start">
            <span className="flex items-center text-base md:text-3xl font-bold">
              10K
              <FaPlus size={18} className="ml-2" />
            </span>
            <span className="text-sm">users</span>
          </div>

          <div className="text-white flex flex-col items-center md:items-start">
            <span className="flex items-center text-base md:text-3xl font-bold">
              6
              <FaPlus size={18} className="ml-2" />
            </span>
            <span className="text-sm">Countries</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;