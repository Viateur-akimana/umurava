import Image from 'next/image'
import React from 'react'

const Cta: React.FC = () => {
  return (
    <div className="bg-white p-8 lg:px-28">
      <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-blue-600 p-8 rounded-xl'>
        <div className="flex items-center">
          <Image
            src="/cta.png"
            alt="cta image"
            width={300}
            height={150}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl text-white font-bold">Ready to Unlock Your Career Potential Today!</h2>
          <p className="mt-2 text-white">
            Join a challenge as a leader to gain valuable work experience, build an impressive portfolio, and increase your chances to land job opportunities and accelerate your career growth.
          </p>
          <button className="mt-4 bg-white text-blue-500 py-2 px-4 rounded">
            View Challenge
          </button>
        </div>
        <Image
          src="/ellipse3.png"
          alt="hero image"
          width={220}
          height={80}
          className='absolute right-0 top-0'
        />
        <Image
          src="/ellipse4.png"
          alt="hero image"
          width={300}
          height={80}
          className='absolute left-3 bottom-0'
        />
      </div>
    </div>
  )
}

export default Cta