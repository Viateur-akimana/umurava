"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const skills = [
  'UI/UX Design',
  'Graphic Design',
  'Data Analysis & Research',
  'Animation',
  'Videography & Photography',
  'Data Science',
  'AI & Machine Learning',
  'Web3',
  'Digital Marketing & Communications',
];

const carouselData = [
  {
    id: 1,
    image: '/dashboard.png', // Replace with actual image paths
    description: 'The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.',
  },
  {
    id: 2,
    image: '/dashboard.png',
    description: 'A data analytics platform helping businesses make informed decisions.',
  },
  {
    id: 3,
    image: '/dashboard.png',
    description: 'Innovative tools to streamline your workflow and improve efficiency.',
  },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
      <div className="flex flex-col items-center text-center my-8 p-8">
        <h1 className="text-3xl font-bold mb-4 w-3/5">
          Skills Challenges Cover various in-demand skills and Careers for the digital economy
        </h1>
        <p className="mb-6">Explore the projects that various talents are working on.</p>
        <div className="flex justify-center gap-2 flex-wrap w-full md:w-4/5">
          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() => setActiveSkill(skill)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold ${activeSkill === skill
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-500 hover:bg-blue-100'
                }`}
            >
              {skill}
            </button>
          ))}
        </div>
        {/* <p className="mt-4 text-gray-600">Selected Skill: {activeSkill}</p> */}
      </div>
      <div className="flex items-center justify-center">
        <div className="w-4/5 bg-gray-100 p-8 rounded-lg text-center">
          <div className="relative grid grid-cols-1 md:grid-cols-2 justify-center">
            <div className="flex flex-col gap-y-4 items-start justify-center px-10">
              <div className="bg-white p-3 rounded-xl">
                <Image
                  src="/sf.png"
                  alt="Sf image"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-gray-700 text-start">{carouselData[currentSlide].description}</p>
              <button className='flex gap-2'>
                <span className='text-blue-600 font-semibold'>Learn more</span>
                <span className='bg-blue-600 rounded-full p-2'>
                  <FaArrowRight color='white' />
                </span>
              </button>
            </div>
            <div className="">
              <Image
                src={carouselData[currentSlide].image}
                alt="Carousel Image"
                width={800}
                height={400}
                className="mx-auto rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
