"use client";
import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const EditChallengeForm = ({ challengeId }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    moneyPrize: "",
    contactEmail: "",
    projectBrief: "",
    projectDescription: [] as string[],
    projectRequirements: [] as string[],
    deliverables: [] as string[],
    seniorityLevel: ["junior"],
    category: "design",
    skillsNeeded: [] as string[],
  });
  const [duration, setDuration] = useState(0);
  const [currentDate] = useState(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://umurava-skill-challenge-backend.onrender.com/api/v1/challenges/${challengeId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data;
        setFormData({
          title: data.title,
          deadline: data.deadline,
          moneyPrize: data.moneyPrize,
          contactEmail: data.contactEmail,
          projectBrief: data.projectBrief,
          projectDescription: data.projectDescription,
          projectRequirements: data.projectRequirements,
          deliverables: data.deliverables,
          seniorityLevel: data.seniorityLevel,
          category: data.category,
          skillsNeeded: data.skillsNeeded,
        });
      } catch (error) {
        console.error("Error fetching challenge:", error);
        alert("Failed to fetch challenge details.");
      }
    };

    fetchChallenge();
  }, [challengeId]);

  useEffect(() => {
    if (formData.deadline) {
      const deadlineDate = new Date(formData.deadline);
      const currentDate = new Date();
      const timeDifference = deadlineDate.getTime() - currentDate.getTime();
      const days = Math.floor(timeDifference / (1000 * 3600 * 24));
      setDuration(days >= 0 ? days : 0);
    }
  }, [formData.deadline]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "seniorityLevel") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: [value],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Handle array input changes (e.g., skillsNeeded, projectRequirements)
  const handleArrayChange = (
    e: KeyboardEvent<HTMLInputElement>,
    field: "skillsNeeded" | "projectRequirements" | "deliverables"
  ) => {
    const target = e.target as HTMLInputElement;
    const value = target.value.trim();

    if (e.key === "Enter" && value !== "") {
      e.preventDefault();
      setFormData((prevState) => ({
        ...prevState,
        [field]: [...prevState[field], value],
      }));
      target.value = "";
    }
  };

  // Handle textarea array changes (e.g., projectDescription)
  const handleTextareaArrayChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    field: "projectDescription"
  ) => {
    const value = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [field]: [value],
    }));
  };

  // Remove item from array fields
  const handleRemoveArrayItem = (
    index: number,
    field: "skillsNeeded" | "projectRequirements" | "deliverables"
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: prevState[field].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `https://umurava-skill-challenge-backend.onrender.com/api/v1/challenges/${challengeId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Challenge updated successfully!");
        router.push("/challenges");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || "Please try again.";
        alert(`Failed to update challenge: ${message}`);
      } else {
        console.error("Error updating challenge:", error);
        alert("An error occurred while updating the challenge. Please try again.");
      }
    }
  };

  return (
    <div className="w-full flex justify-center mx-auto my-6 items-center min-h-screen">
      <div className="bg-white py-8 px-3 lg:px-8 md:px-5 rounded-xl border w-full lg:w-3/5 md:w-4/5">
        <h1 className="text-2xl font-bold text-center mb-4">Edit Challenge</h1>
        <p className="text-center text-gray-600 mb-8">
          Update the details of your challenge
        </p>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-md font-medium text-gray-700 mb-1"
            >
              Challenge Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Deadline and Duration */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label
                htmlFor="deadline"
                className="block text-md font-medium text-gray-700 mb-1"
              >
                Deadline
              </label>
              <input
                id="deadline"
                type="date"
                name="deadline"
                value={formData.deadline.split("T")[0]}
                onChange={handleChange}
                min={currentDate}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="duration"
                className="block text-md font-medium text-gray-700 mb-1"
              >
                Duration (Days)
              </label>
              <input
                id="duration"
                type="text"
                value={duration}
                readOnly
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Money Prize and Contact Email */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label
                htmlFor="moneyPrize"
                className="block text-md font-medium text-gray-700 mb-1"
              >
                Money Prize
              </label>
              <input
                id="moneyPrize"
                type="text"
                name="moneyPrize"
                value={formData.moneyPrize}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="contactEmail"
                className="block text-md font-medium text-gray-700 mb-1"
              >
                Contact Email
              </label>
              <input
                id="contactEmail"
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-4">
            <label
              htmlFor="projectDescription"
              className="block text-md font-medium text-gray-700 mb-1"
            >
              Project Description
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription[0] || ""}
              onChange={(e) => handleTextareaArrayChange(e, "projectDescription")}
              className="w-full px-4 py-4 border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Project Brief */}
          <div className="mb-4">
            <label
              htmlFor="projectBrief"
              className="block text-md font-medium text-gray-700 mb-1"
            >
              Project Brief
            </label>
            <textarea
              id="projectBrief"
              name="projectBrief"
              value={formData.projectBrief}
              onChange={handleChange}
              maxLength={50}
              className="w-full px-4 py-4 border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            <p className="text-sm text-[#667185]">
              Keep this simple, up to 50 characters
            </p>
          </div>

          {/* Deliverables */}
          <div className="mb-4">
            <label
              htmlFor="deliverables"
              className="block text-md font-medium text-gray-700 mb-1"
            >
              Deliverables
            </label>
            <input
              id="deliverables"
              type="text"
              placeholder="Press Enter to add a deliverable"
              onKeyDown={(e) => handleArrayChange(e, "deliverables")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <ul className="mt-2 space-y-2">
              {formData.deliverables.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 bg-gray-50 rounded"
                >
                  <span>{item}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveArrayItem(index, "deliverables")}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Seniority Level */}
          <div className="mb-4">
            <label
              htmlFor="seniorityLevel"
              className="block text-md font-medium text-gray-700 mb-1"
            >
              Seniority Level
            </label>
            <select
              id="seniorityLevel"
              name="seniorityLevel"
              value={formData.seniorityLevel[0]}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            >
              <option value="junior">Junior</option>
              <option value="intermediate">Intermediate</option>
              <option value="senior">Senior</option>
            </select>
          </div>

          {/* Category */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-md font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            >
              <option value="design">Design</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
            </select>
          </div>

          {/* Project Requirements */}
          <div className="mb-4">
            <label
              htmlFor="projectRequirements"
              className="block text-md font-medium text-gray-700 mb-1"
            >
              Project Requirements
            </label>
            <input
              id="projectRequirements"
              type="text"
              placeholder="Press Enter to add a requirement"
              onKeyDown={(e) => handleArrayChange(e, "projectRequirements")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <ul className="mt-2 space-y-2">
              {formData.projectRequirements.map((req, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 bg-gray-50 rounded"
                >
                  <span>{req}</span>
                  <button
                    type="button"
                    onClick={() =>
                      handleRemoveArrayItem(index, "projectRequirements")
                    }
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Needed */}
          <div className="mb-4">
            <label
              htmlFor="skillsNeeded"
              className="block text-md font-medium text-gray-700 mb-1"
            >
              Skills Needed
            </label>
            <input
              id="skillsNeeded"
              type="text"
              placeholder="Press Enter to add a skill"
              onKeyDown={(e) => handleArrayChange(e, "skillsNeeded")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <ul className="mt-2 space-y-2">
              {formData.skillsNeeded.map((skill, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 bg-gray-50 rounded"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveArrayItem(index, "skillsNeeded")}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full flex justify-between gap-3 mt-8">
            <button
              type="button"
              onClick={() => router.push("/challenges")}
              className="w-2/5 px-6 py-2 border border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-3/5 px-6 py-2 text-white font-semibold bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Update Challenge
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditChallengeForm;