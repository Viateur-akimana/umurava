import React from 'react'

const Cta: React.FC = () => {
  return (
    <div className="bg-blue-500 p-6 rounded-lg text-white">
      <h2 className="text-xl font-bold">Ready to Unlock Your Career Potential Today!</h2>
      <p className="mt-2">
        Join a challenge as a leader to gain valuable work experience, build an impressive portfolio, and increase your chances to land job opportunities and accelerate your career growth.
      </p>
      <button className="mt-4 bg-white text-blue-500 py-2 px-4 rounded">
        View Challenge
      </button>
    </div>
  )
}

export default Cta