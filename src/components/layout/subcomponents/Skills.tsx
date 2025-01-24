"use client"

import React, { useState } from 'react';
import Image from 'next/image';

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
    image: '/images/dashboard.png', // Replace with actual image paths
    description: 'The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.',
  },
  {
    id: 2,
    image: '/images/dashboard.png',
    description: 'A data analytics platform helping businesses make informed decisions.',
  },
  {
    id: 3,
    image: '/images/dashboard.png',
    description: 'Innovative tools to streamline your workflow and improve efficiency.',
  },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
      {/* Skills Section */}
      <div className="text-center my-8">
        <h1 className="text-2xl font-bold mb-4">
          Skills Challenges Cover various in-demand skills and Careers for the digital economy
        </h1>
        <p className="mb-6">Explore the projects that various talents are working on.</p>
        <div className="flex justify-center gap-2 flex-wrap">
          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() => setActiveSkill(skill)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                activeSkill === skill
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-blue-100'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
        <p className="mt-4 text-gray-600">Selected Skill: {activeSkill}</p>
      </div>

      {/* Carousel Section */}
      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <div className="relative">
          <Image
            src={carouselData[currentSlide].image}
            alt="Carousel Image"
            width={800}
            height={400}
            className="mx-auto rounded-md"
          />
          <p className="mt-4 text-gray-700">{carouselData[currentSlide].description}</p>
        </div>
        <div className="flex justify-center mt-4 gap-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full ${
                currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
