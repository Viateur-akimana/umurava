import React from 'react'

const Hero = () => {
  return (
    <div className="flex items-center justify-between p-8 ">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold text-blue-800">Build Work Experience through Skills Challenges Program</h1>
        <p className="mt-4 text-lg text-gray-700">Enhance your Employability and Accelerate your Career Growth by working on Hands-on projects & hackathons from various businesses & organizations.</p>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Get Started</button>
      </div>
      <div className="flex-shrink-0">
        {/* image content here */}
      </div>
    </div>
  )
}

export default Hero