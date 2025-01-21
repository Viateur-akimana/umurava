import React from 'react'

const Stats = () => {
  return (
    <div className="bg-blue-500 p-6 rounded-lg flex justify-around items-center m-10">
      <div className="text-white text-2xl font-bold">
        1 <span className="text-sm">Year</span>
      </div>
      <div className="text-white text-2xl font-bold">
        500 <span className="text-sm">Challenges Completed</span>
      </div>
      <div className="text-white text-2xl font-bold">
        10K <span className="text-sm">users</span>
      </div>
      <div className="text-white text-2xl font-bold">
        6 <span className="text-sm">Countries</span>
      </div>
    </div>
  )
}

export default Stats