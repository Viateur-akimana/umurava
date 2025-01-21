import React from 'react'


const Challenges = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Explore Challenges & Hackathons</h1>
      <p className="mb-8">Join Skills Challenges Program to accelerate your career growth and become part of Africa&s largest workforce of digital professionals.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-4 shadow-lg">
          <div className="bg-blue-500 text-white p-2 rounded-t-lg">Open</div>
          <h2 className="text-xl font-semibold mt-2">Design a Dashboard for StakeFund</h2>
          <p className="text-gray-600">Difficulty: Easy</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">View Challenge</button>
        </div>
        <div className="border rounded-lg p-4 shadow-lg">
          <div className="bg-blue-500 text-white p-2 rounded-t-lg">Open</div>
          <h2 className="text-xl font-semibold mt-2">Build a Mobile App for EcoTrack</h2>
          <p className="text-gray-600">Difficulty: Medium</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">View Challenge</button>
        </div>
        <div className="border rounded-lg p-4 shadow-lg">
          <div className="bg-blue-500 text-white p-2 rounded-t-lg">Open</div>
          <h2 className="text-xl font-semibold mt-2">Create a Website for Foodies</h2>
          <p className="text-gray-600">Difficulty: Hard</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">View Challenge</button>
        </div>
      </div>
      <button className="mt-8 bg-blue-500 text-white py-2 px-4 rounded">View More</button>
    </div>
  )
}

export default Challenges