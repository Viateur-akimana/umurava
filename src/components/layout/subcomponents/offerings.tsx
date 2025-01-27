import React from 'react'
import { FaBriefcase } from 'react-icons/fa'

const Offerings = () => {
    return (
        <div className="px-8 md:px-24 py-12 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-6">
                Why we are solving this problem
            </h1>
            <div className="flex flex-col justify-center md:flex-row gap-5">
                <div className='w-full md:w-[60%] flex flex-col gap-5'>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="bg-blue-600 text-white p-8 rounded-lg">
                            <div className='bg-white p-3 rounded mb-2 w-10'>
                                <FaBriefcase color='#2B71F0' />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">
                                Employability and Career Development Opportunities
                            </h2>
                            <p className='w-full'>
                                Students gain hands-on experience working on real-world challenges and help them build professional networks that increase their chances and readiness of landing job opportunities and this lead to career advancement and long-term succes..
                            </p>
                        </div>
                        <div className="bg-blue-600 text-white p-8 rounded-lg">
                            <div className='bg-white p-3 rounded mb-2 w-10'>
                                <FaBriefcase color='#2B71F0' />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">
                                Practical Application of Classroom Knowledge
                            </h2>
                            <p className='w-full'>
                                The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses.
                            </p>
                        </div>
                    </div>
                    <div className="bg-blue-600 text-white p-10 rounded-lg">
                        <div className='bg-white p-3 rounded mb-2 w-10'>
                            <FaBriefcase color='#2B71F0' />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">
                            Access to the Industry Experts & Mentors
                        </h2>
                        <p className='w-full'>
                            Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the trends of digital careers. This can help students gain a deep understanding of their chosen field.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-[30%] grid grid-cols-1 gap-5">
                    <div className="bg-blue-600 text-white p-8 rounded-lg">
                        <div className='bg-white p-3 rounded mb-2 w-10'>
                            <FaBriefcase color='#2B71F0' />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">
                            Students & Trainees Engagement
                        </h2>
                        <p className='w-full'>
                            Embed and incorporate Skills Challenges into your courses to give students and trainees hands-on projects and practices  that enhance their learning experience and skills mastery. Competitive and project-based challenges keep students motivated and actively engaged in their learning journey.
                        </p>
                    </div>
                    <div className="bg-blue-600 text-white p-8 rounded-lg">
                        <div className='bg-white p-3 rounded mb-2 w-10'>
                            <FaBriefcase color='#2B71F0' />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">
                            Skills Assessments
                        </h2>
                        <p className='w-full'>
                            Embed our projects based tests and skills assessments directly into your curriculum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offerings
