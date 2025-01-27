import Image from 'next/image'
import React from 'react'

const Program = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-14">
      <div className="z-10 max-w-lg text-center md:text-left">
        <h1 className="text-3xl md:text-3xl font-bold leading-tight">
        Skills Challenges Program is built on the Umurava Talent Marketplace Platform
        </h1>
        <p className="mt-4 text-lg text-gray-700">
        A Project-based Learning Solution aimed at providing young and senior talents with an opportunity to showcase their skills to real-world projects and challenges from our partner companies and organizations. <br /><br />
Umurava Skills Challenges enables young talents to build a portfolio and experience that increases their readiness to access job opportunities and projects.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center">
        <Image
          src="/challenges-page.png"
          alt="hero image"
          width={500}
          height={100}
        />
      </div>
    </div>
  )
}

export default Program
