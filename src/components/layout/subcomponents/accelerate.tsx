import Image from 'next/image'
import React from 'react'

const Accelerate = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-14">
      <div className="z-10 max-w-lg text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-800 leading-tight">
          Build Work Experience through Skills Challenges Program
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Enhance your employability and accelerate your career growth by working on hands-on projects & hackathons from various businesses & organizations.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="/hero.png"
          alt="hero image"
          width={500}
          height={100}
        />
      </div>
    </div>
  )
}

export default Accelerate
