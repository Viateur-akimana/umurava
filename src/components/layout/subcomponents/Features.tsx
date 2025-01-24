import React from 'react'
import { FaBriefcase } from 'react-icons/fa'

const Features = () => {
  return (
    <div className="px-8 md:px-24 py-12 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6">
        Experience a New Way of Building Work Experience
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Join Skills Challenges Program to accelerate your career growth and become part of Africa largest workforce of digital professionals.
      </p>
      <div className="flex flex-col gap-5">
        <div>
          <div className="bg-primary text-white p-10 rounded-lg">
            <div className='bg-white p-3 rounded mb-2 w-10'>
              <FaBriefcase color='#2B71F0' />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Build a Strong Portfolio and Hands-On Experience
            </h2>
            <p className='w-full md:w-4/5'>
              Tackle real-world projects through challenges and hackathons that mirror real world challenges faced by businesses and organizations. Therefore, showcase your skills and accomplishments to potential employers and clients through a portofolio  of completed projects.
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-primary text-white p-8 rounded-lg">
            <div className='bg-white p-3 rounded mb-2 w-10'>
              <FaBriefcase color='#2B71F0' />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Enhance Your Employment Path
            </h2>
            <p className='w-full md:w-4/5'>
              Develop the in-demand skills and build a strong portfolio to increase your chances of landing your dream job or contract.
            </p>
          </div>
          <div className="bg-primary text-white p-8 rounded-lg">
            <div className='bg-white p-3 rounded mb-2 w-10'>
              <FaBriefcase color='#2B71F0' />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Earn Recognition and Prizes
            </h2>
            <p className='w-full md:w-4/5'>
              Earn both Money and Knowledge Prizes by participating in various contests and competitions by working on real-world projects and hackathons from our partner companies & organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
