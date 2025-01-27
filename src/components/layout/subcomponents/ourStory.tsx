import Image from 'next/image'
import React from 'react'

const OurStory = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-14">
      <div className="z-10 max-w-lg text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-800 leading-tight">Our story</h1>
        <p className="mt-4 text-lg text-gray-700">
          With 3 years of experience matching African digital talents to local and global job markets, we still remain with a big number of jobs that remain unfilled due to the lack of experienced African Talents. <br /><br />
          Driven by our mission to place skilled and professional digital talent, we created Skills Challenges as a project-based learning solution  for talents to gain real-world experience, solve problems, and build portfolios so that they become ready for global job markets.
        </p>
      </div>
      <div className="w-full mt-5 md:mt-0 md:w-1/2 flex justify-center">
        <Image
          src="/video.png"
          alt="hero image"
          width={500}
          height={100}
        />
      </div>
    </div>
  )
}

export default OurStory