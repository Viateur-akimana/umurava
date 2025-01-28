import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center md:flex-row justify-center md:px-12 py-12 md:py-14 mx-4 md:mx-0">
      <div className="max-w-lg text-center md:text-left mb-68md:mr-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2B71F0] leading-tight">
          Build Work Experience through Skills Challenges Program
        </h1>
        <p className="mt-6 text-lg text-[#2B3338]">
          Enhance your employability and accelerate your career growth by working on hands-on projects & hackathons from various businesses & organizations.
        </p>
        <button className="w-[207px] h-[56px] text-white bg-[#2B71F0] rounded-lg hover:bg-blue-700 transition duration-300 mt-6">
          Get Started
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="/hero.png"
          alt="hero image"
          width={846}
          height={601}
        />
      </div>
    </div>
  )
}

export default Hero
