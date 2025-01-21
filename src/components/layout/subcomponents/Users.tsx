import React from 'react'

const Users = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Users are in Love with Skills Challenges Program</h1>
      <p className="mb-8">See what our clients say about working with us. Their success speaks for our dedication and expertise.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array(3).fill(null).map((_, index) => (
          <div key={index} className="bg-blue-500 rounded-lg p-4 flex flex-col items-center">
            <div className="bg-white rounded-full p-4 mb-2">
              <span className="text-blue-500">▶</span>
            </div>
            <h2 className="text-white">Manuel Jask</h2>
            <p className="text-white">Product Designer, Kapil</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users