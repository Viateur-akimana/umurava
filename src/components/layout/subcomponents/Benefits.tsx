import React from 'react'

const Benefits = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">What else can I gain from participating in Skills Challenges?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start p-4 border rounded-lg shadow-sm">
          <div className="mr-4">
            <img src="/icons/enhance.svg" alt="Enhance Your Employment Path" className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-semibold">Enhance Your Employment Path</h3>
            <p>Develop your skills and enhance your professional network.</p>
          </div>
        </div>
        <div className="flex items-start p-4 border rounded-lg shadow-sm">
          <div className="mr-4">
            <img src="/icons/recognition.svg" alt="Earn Recognition and Prizes" className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-semibold">Earn Recognition and Prizes</h3>
            <p>Showcase your skills and earn rewards for your achievements.</p>
          </div>
        </div>
        <div className="flex items-start p-4 border rounded-lg shadow-sm">
          <div className="mr-4">
            <img src="/icons/learn.svg" alt="Learn from Industry Experts" className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-semibold">Learn from Industry Experts</h3>
            <p>Access valuable insights from experienced professionals in the digital realm.</p>
          </div>
        </div>
        <div className="flex items-start p-4 border rounded-lg shadow-sm">
          <div className="mr-4">
            <img src="/icons/personal_growth.svg" alt="Personal Growth" className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-semibold">Personal Growth</h3>
            <p>Master crucial skills that will advance your career.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits