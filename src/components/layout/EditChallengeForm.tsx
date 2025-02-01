"use client"
import React, { ChangeEvent, useState } from "react";

const EditChallengeForm = () => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <div className="w-full flex justify-center mx-auto my-6 items-center min-h-screen">
      <div className="bg-white py-6 px-4 lg:px-6 md:px-4 rounded-xl border w-full lg:w-2/5 md:w-3/5">
        <h1 className="text-xl font-semibold text-center mb-3">Edit Challenge</h1>
        <p className="text-center text-gray-600 mb-4 text-sm">Fill out these details to build your broadcast</p>
        <form className="px-4 space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="block text-lg text-gray-600">
              Challenge/ Hackathon title
            </label>
            <input
              type="text"
              value="Design a Dashboard For SoKofund"
              className="border border-gray-400 rounded-lg w-full px-3 py-2 outline-none focus:border-red-300 text-lg"
            />
          </div>
          <div className="flex items-center w-full gap-4">
            <div className="flex-1 space-y-2">
              <label htmlFor="deadline" className="block text-lg text-gray-600">
                Deadline
              </label>
              <input
                type="text"
                value="24/12/2024"
                className="border border-gray-400 rounded-lg w-full px-3 py-2 outline-none focus:border-red-300 text-lg"
              />
            </div>
            <div className="flex-1 space-y-2">
              <label htmlFor="duration" className="block text-lg text-gray-600">
                Duration
              </label>
              <input
                type="text"
                value="7 Days"
                className="border border-gray-400 rounded-lg w-full px-3 py-2 outline-none focus:border-red-300 text-lg"
              />
            </div>
          </div>
          <div className="flex items-center w-full gap-4">
            <div className="flex-1 space-y-2">
              <label htmlFor="prize" className="block text-lg text-gray-600">
                Money Prize
              </label>
              <input
                type="text"
                value="$150"
                className="border border-gray-400 rounded-lg w-full px-3 py-2 outline-none focus:border-red-300 text-lg"
              />
            </div>
            <div className="flex-1 space-y-2">
              <label htmlFor="email" className="block text-lg text-gray-600">
                Contact Email
              </label>
              <input
                type="text"
                value="talent@umurava.africa"
                className="border border-gray-400 rounded-lg w-full px-3 py-2 outline-none focus:border-red-300 text-lg"
              />
            </div>
          </div>
          <div className="py-3 space-y-2">
            <label htmlFor="duration" className="block text-lg text-gray-600">
              Project Brief
            </label>
            <textarea
              value="A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa."
              name="projectBrief"
              id="projectBrief"
              rows={5}
              className="border border-gray-400 rounded-lg w-full px-3 py-4 text-gray-500 outline-none focus:border-red-300 text-lg"
            />
            <p className="text-sm text-gray-500">Keep this simple of 50 characters</p>
          </div>
          <div className="py-3 space-y-2">
            <label htmlFor="projectDescription" className="block text-lg text-gray-600">
              Project Description
            </label>
            <textarea
              name="projectDescription"
              id="projectDescription"
              rows={5}
              className="border border-gray-400 rounded-lg w-full px-3 py-4 text-gray-500 outline-none focus:border-red-300 text-lg"
              value={text}
              onChange={handleChange}
            />
            <p className="text-sm text-gray-500">Keep this simple of 250 characters</p>
          </div>
          <div className="py-3 space-y-2">
            <label htmlFor="requirements" className="block text-lg text-gray-600">
              Project Requirements
            </label>
            <textarea
              name="requirements"
              id="requirements"
              rows={5}
              className="border border-gray-400 rounded-lg w-full px-3 py-4 text-gray-500 outline-none focus:border-red-300 text-lg"
              value={text}
              onChange={handleChange}
            />
            <p className="text-sm text-gray-500">Keep this simple of 500 characters</p>
          </div>
          <div className="py-3 space-y-2">
            <label htmlFor="deliverable" className="block text-lg text-gray-600">
              Deliverables
            </label>
            <textarea
              name="deliverable"
              id="deliverable"
              rows={5}
              className="border border-gray-400 rounded-lg w-full px-3 py-4 text-gray-500 outline-none focus:border-red-300 text-lg"
              value={text}
              onChange={handleChange}
            />
            <p className="text-sm text-gray-500">Keep this simple of 500 characters</p>
          </div>
          <div className="flex items-center gap-8 w-full py-8">
            <button className="border-2 border-[#2B71F0] bg-white hover:bg-[#2B71F0] hover:text-white duration-500 text-[#2B71F0] rounded-lg py-4 px-6 text-lg w-1/3">
              Cancel
            </button>
            <button className="border-2 border-[#2B71F0] bg-[#2B71F0] hover:bg-blue-800 duration-500 text-white rounded-lg py-4 px-6 text-lg">
              Update challenge
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditChallengeForm;
