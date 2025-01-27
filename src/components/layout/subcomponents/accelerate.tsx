import Image from 'next/image'
import React from 'react'

const Accelerate = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-14">
      <div className="z-10 max-w-lg text-center md:text-left">
        <h1 className="text-3xl md:text-3xl font-bold text-blue-800 leading-tight">
        Accelerate Your Students and Traineess Employability and Career Growth through Project-based Learning Solution
        </h1>
        <p className="mt-4 text-lg text-gray-700">
        We partner with Universities, Schools, and Trainining Institutions to  build the work experience of their students and trainees through project based learning challenges and hackathons
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Partner with us
        </button>
      </div>
      <div className="w-full mt-5 md:mt-0 md:w-1/2 flex justify-center">
        <Image
          src="/accelerate.png"
          alt="hero image"
          width={500}
          height={100}
        />
      </div>
    </div>
  )
}

export default Accelerate
