import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Stats = () => {
  return (
    <div className="relative bg-blue-500 md:p-14 p-8 rounded-lg flex justify-around items-center m-10">
      <Image
        src="/ellipse1.png"
        alt="hero image"
        width={220}
        height={80}
        className='absolute right-0 top-0'
      />
      <Image
        src="/ellipse2.png"
        alt="hero image"
        width={300}
        height={80}
        className='absolute left-3 bottom-0'
      />
      <div className="text-white text-base md:text-3xl font-bold flex flex-col">
        <span>1</span>
        <span className="text-sm">Year</span>
      </div>
      <div className="text-white text-base md:text-3xl font-bold flex flex-col">
        <span className='flex items-center gap-2'>
          500
          <FaPlus size={18} />
        </span>
        <span className="text-sm">Challenges Completed</span>
      </div>
      <div className="text-white text-base md:text-3xl font-bold flex flex-col">
        <span className='flex items-center gap-2'>
          10K
          <FaPlus size={18} />
        </span>
        <span className="text-sm">users</span>
      </div>
      <div className="text-white text-base md:text-3xl font-bold flex flex-col">
        <span className='flex items-center gap-2'>
          6
          <FaPlus size={18} />
        </span>
        <span className="text-sm">Countries</span>
      </div>
    </div>
  )
}

export default Stats