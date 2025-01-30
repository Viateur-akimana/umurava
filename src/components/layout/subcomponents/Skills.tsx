'use client';
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
    image: '/dashboard.png',
    description:
      'The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.',
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
    <div className="p-4 my-10 mb-10 md:p-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#03192E] mb-4 w-full md:w-3/5">
        Skills Challenges Cover various in-demand skills and Careers for the digital economy
        </h1>
        <p className="mb-6 text-sm md:text-base text-[#687588] w-full md:w-3/5">
          Explore the projects that various talents are working on.
        </p>
        <div className="flex justify-center gap-2 flex-wrap w-full md:w-4/5">
          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() => setActiveSkill(skill)}
              className={`px-4 py-2 mx-auto rounded-lg text-sm font-semibold transition-all ${
                activeSkill === skill
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#F1F1F1] text-[#687588] hover:bg-blue-100'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center my-8">
        <div className="w-full md:w-4/5 bg-gray-100 p-6 md:p-8 rounded-lg text-center shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex flex-col gap-y-4 items-start px-4 md:px-10">
              <div className="bg-white p-3 rounded-xl shadow-md">
                <Image src="/sf.png" alt="Sf image" width={40} height={40} />
              </div>
              <p className="text-gray-700 text-start text-sm md:text-base">
                {carouselData[currentSlide].description}
              </p>
              <button className="flex items-center gap-2 mt-4">
                <span className="text-blue-600 font-semibold">Learn more</span>
                <span className="bg-blue-600 rounded-full p-2">
                  <FaArrowRight color="white" />
                </span>
              </button>
            </div>
            <div>
              <Image
                src={carouselData[currentSlide].image}
                alt="Carousel Image"
                width={800}
                height={400}
                className="mx-auto rounded-md shadow-md"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
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