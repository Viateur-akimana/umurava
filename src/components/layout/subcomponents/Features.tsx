import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-24 py-8 md:py-12 w-full bg-[#F9FAFB]">
      <h1 className="text-2xl md:text-3xl font-bold text-[#03192E] text-center mb-4 md:mb-6">
        Experience a New Way of Building Work Experience
      </h1>
      <p className="text-center text-base md:text-lg text-[#687588] font-dm-sans mb-8 md:mb-12 px-4">
        Join Skills Challenges Program to accelerate your career growth and become part of Africa largest workforce of digital professionals.
      </p>
      
      <div className="flex flex-col gap-5 max-w-7xl mx-auto">
        {/* Main feature card */}
        <div className="bg-[#2B71F0] w-full text-white p-6 md:p-10 rounded-lg">
          <div className="text-white">
            <div className="bg-white w-[62px] h-[62px] rounded p-4 mb-2">
              <FaBriefcase className="text-[#2B71F0] w-6 h-6 mx-auto" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 font-work-sans">
              Build a Strong Portfolio and Hands-On Experience
            </h2>
            <p className="w-full md:w-4/5">
              Tackle real-world projects through challenges and hackathons that mirror real world challenges faced by businesses and organizations. Therefore, showcase your skills and accomplishments to potential employers and clients through a portofolio of completed projects.
            </p>
          </div>
        </div>

        {/* Secondary features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-[#2B71F0] w-full text-white p-6 md:p-8 rounded-lg">
            <div className="bg-white w-[62px] h-[62px] rounded p-4 mb-2">
              <FaBriefcase className="text-[#2B71F0] w-6 h-6 mx-auto" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Enhance Your Employment Path
            </h2>
            <p className="w-full md:w-4/5">
              Develop the in-demand skills and build a strong portfolio to increase your chances of landing your dream job or contract.
            </p>
          </div>
          
          <div className="bg-[#2B71F0] w-full text-white p-6 md:p-8 rounded-lg">
            <div className="bg-white w-[62px] h-[62px] rounded p-4 mb-2">
              <FaBriefcase className="text-[#2B71F0] w-6 h-6 mx-auto" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Earn Recognition and Prizes
            </h2>
            <p className="w-full md:w-4/5">
              Earn both Money and Knowledge Prizes by participating in various contests and competitions by working on real-world projects and hackathons from our partner companies & organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;