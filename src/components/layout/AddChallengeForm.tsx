import React from "react";

const CreateChallenge = () => {
  return (
    <div className="flex justify-center mx-auto my-6 items-center min-h-screen">
      <div className="bg-white p-8 rounded-xl border w-[670px] h-[1085px]">
        <h1 className="text-2xl font-bold text-center mb-4">
          Create New Challenge
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Fill out these details to build your broadcast
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-md font-medium text-gray-700 mb-1">
              Challenge/Hackathon Title
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-md font-medium text-gray-700 mb-1">
                Deadline
              </label>
              <input
                type="date"
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-md font-medium text-gray-700 mb-1">
                Duration
              </label>
              <input
                type="text"
                placeholder="Duration"
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-md font-medium text-gray-700 mb-1">
                Money Prize
              </label>
              <input
                type="text"
                placeholder="Prize"
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-md font-medium text-gray-700 mb-1">
                Contact Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium text-gray-700 mb-1">
              Project Description
            </label>
            <textarea
              placeholder="Enter text here..."
              maxLength={250}
              className="w-full px-4 py-4 border border-[##D0D5DD] rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
            <p className="text-sm text-gray-500">
              Keep this simple, up to 250 characters
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-md font-medium text-gray-700 mb-1">
              Project Brief
            </label>
            <textarea
              placeholder="Enter text here..."
              maxLength={50}
              className="w-full px-4 py-4 border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
            <p className="text-sm text-[#667185]">
              Keep this simple, up to 50 characters
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-md font-medium text-gray-700 mb-1">
              Project Description & Tasks
            </label>
            <textarea
              placeholder="Enter text here..."
              maxLength={600}
              className="w-full px-4 py-10 border border-[##D0D5DD] rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
            <p className="text-sm text-gray-500">
              Keep this simple, up to 600 characters
            </p>
          </div>
          <div className="flex space-x-3 mt-8">
            <button
              type="button"
              className="px-6 py-2 w-[220px] h-[55px] text-gray-700 border border-blue-500  rounded-lg hover:bg-gray-300"
            >
                Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 w-[324px] text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Create Challenge
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateChallenge;
