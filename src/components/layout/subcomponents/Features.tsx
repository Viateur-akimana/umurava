import React from 'react'

const Features = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-4">Experience a New Way of Building Work Experience</h1>
      <p className="text-center mb-8">Join Skills Challenges Program to accelerate your career growth and become part of Africa&aposs largest workforce of digital professionals.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Build a Strong Portfolio and Hand-On Experience</h2>
          <p>Tackle real-world projects through challenges and hackathons that mirror real world challenges faced by businesses and organizations.</p>
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Enhance Your Employment Path</h2>
          <p>Develop the in-demand skills and build a strong portfolio to increase your chances of landing your dream job or contract.</p>
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Earn Recognition and Prizes</h2>
          <p>Earn both Money and Knowledge Prizes by participating in various contests and competitions by working on real world projects and hackathons from our partner companies & organizations.</p>
        </div>
      </div>
    </div>
  )
}

export default Features