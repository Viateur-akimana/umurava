import React from 'react'
import { FaBriefcase } from 'react-icons/fa'

const Problems = () => {
    return (
        <div className="px-8 md:px-24 py-12 bg-gray-50">
            <h1 className="text-3xl font-bold text-center mb-6">
                Why we are solving this problem
            </h1>
            <div className="flex flex-col gap-5">
                <div>
                    <div className="bg-blue-600 text-white p-10 rounded-lg">
                        <div className='bg-white p-3 rounded mb-2 w-10'>
                            <FaBriefcase color='#2B71F0' />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">
                            Bridging the Experience Ga
                        </h2>
                        <p className='w-full md:w-4/5'>
                            Many talents acquired theoretical knowledge and are rejected from jobs because they lack work experience and are not able to put in actions what they acquired in the schools.
                        </p>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-blue-600 text-white p-8 rounded-lg">
                        <div className='bg-white p-3 rounded mb-2 w-10'>
                            <FaBriefcase color='#2B71F0' />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">
                            Bridging Education and Employment
                        </h2>
                        <p className='w-full md:w-4/5'>
                            Traditional education doesnt’ always prepare talents for the demands of the tech and digital economy and we are providing in-demand skills through Skills Challenges.
                        </p>
                    </div>
                    <div className="bg-blue-600 text-white p-8 rounded-lg">
                        <div className='bg-white p-3 rounded mb-2 w-10'>
                            <FaBriefcase color='#2B71F0' />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">
                            Preparing Talents for Global Job Markets
                        </h2>
                        <p className='w-full md:w-4/5'>
                            We are ensuring that African talents shine globally and that’s why we are equipping them with global technical experience and shandout globally.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Problems
