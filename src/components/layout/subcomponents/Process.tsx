import React from 'react'

const Process = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">How to Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">Step 1</h3>
          <p>Sign up on Unsure Platform</p>
          <p>Submit your completed project for evaluation.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">Step 2</h3>
          <p>Register and Participate</p>
          <p>Sign up for the challenge and start working on the project.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">Step 3</h3>
          <p>Submit your work</p>
          <p>Submit your completed project for evaluation.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">Step 4</h3>
          <p>Receive Feedback and Recognition</p>
          <p>Get feedback on your work and celebrate your achievements.</p>
        </div>
      </div>
    </div>
  )
}

export default Process