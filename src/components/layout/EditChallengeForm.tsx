"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Challenge } from "@/types/challenge";
import { useUpdateChallenge } from "@/hooks/useChallenges";

const EditChallengeForm: React.FC<{ challenge: Challenge | null }> = ({ challenge }) => {
  const router = useRouter();
  const [currentDate] = useState(new Date().toISOString().split("T")[0]);
  const [duration, setDuration] = useState(0);
  const { handleUpdateChallenge, loading, error, success } = useUpdateChallenge();
  const [formData, setFormData] = useState<Partial<Challenge>>({
    title: "",
    deadline: "",
    moneyPrize: "",
    contactEmail: "",
    projectBrief: "",
    projectDescription: [],
    projectRequirements: [],
    deliverables: [],
    seniorityLevel: ["junior"],
    category: "design",
    skillsNeeded: [],
  });

  useEffect(() => {
    if (challenge) {
      setFormData({
        title: challenge.title || "",
        deadline: challenge.deadline || "",
        moneyPrize: challenge.moneyPrize || "",
        contactEmail: challenge.contactEmail || "",
        projectBrief: challenge.projectBrief || "",
        projectDescription: challenge.projectDescription || [],
        projectRequirements: challenge.projectRequirements || [],
        deliverables: challenge.deliverables || [],
        seniorityLevel: challenge.seniorityLevel || ["junior"],
        category: challenge.category || "design",
        skillsNeeded: challenge.skillsNeeded || [],
      });
    }
  }, [challenge]);

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

  const handleTextareaArrayChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    field: keyof Pick<Challenge, "projectDescription" | "deliverables">
  ) => {
    const value = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [field]: [value],
    }));
  };

  const handleArrayChange = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: keyof Pick<Challenge, "skillsNeeded" | "projectRequirements">
  ) => {
    const target = e.target as HTMLInputElement;
    const value = target.value.trim();

    if (e.key === "Enter" && value !== "") {
      e.preventDefault();
      setFormData((prevState) => ({
        ...prevState,
        [field]: [...(prevState[field] || []), value],
      }));
      target.value = "";
    }
  };

  const handleRemoveArrayItem = (
    index: number,
    field: keyof Pick<Challenge, "skillsNeeded" | "projectRequirements">
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: (prevState[field] || []).filter((_, i) => i !== index),
    }));
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!challenge) return;

    try {
      const updatedChallenge = await handleUpdateChallenge(challenge._id, formData);
      console.log("Updated challenge:", updatedChallenge)
      if (success) {
        alert("Challenge updated successfully!");
        router.push("/challenges");
      }
    } catch (err) {
      console.error("Error updating challenge:", err);
      alert(error || "An error occurred while updating the challenge");
    }
  };

  return (
    <div className="w-full flex justify-center mx-auto my-6 items-center min-h-screen">
      <div className="bg-white py-8 px-3 lg:px-8 md:px-5 rounded-xl border w-full lg:w-3/5 md:w-4/5">
        <h1 className="text-2xl font-bold text-center mb-4">
          Edit Challenge
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Update the details of your challenge
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-md font-medium text-gray-700 mb-1">
              Challenge/Hackathon Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              placeholder="Enter Title"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label htmlFor="deadline" className="block text-md font-medium text-gray-700 mb-1">
                Deadline
              </label>
              <input
                id="deadline"
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                min={currentDate}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="duration" className="block text-md font-medium text-gray-700 mb-1">
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

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label htmlFor="moneyPrize" className="block text-md font-medium text-gray-700 mb-1">
                Money Prize
              </label>
              <input
                id="moneyPrize"
                type="text"
                name="moneyPrize"
                value={formData.moneyPrize}
                placeholder="Prize"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="contactEmail" className="block text-md font-medium text-gray-700 mb-1">
                Contact Email
              </label>
              <input
                id="contactEmail"
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                placeholder="Email"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="projectDescription" className="block text-md font-medium text-gray-700 mb-1">
              Project Description
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription?.[0] || ""}
              onChange={(e) => handleTextareaArrayChange(e, "projectDescription")}
              placeholder="Enter text here..."
              maxLength={250}
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="projectBrief" className="block text-md font-medium text-gray-700 mb-1">
              Project Brief
            </label>
            <textarea
              id="projectBrief"
              name="projectBrief"
              value={formData.projectBrief}
              onChange={handleChange}
              placeholder="Enter text here..."
              maxLength={50}
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            <p className="text-sm text-gray-600">
              Keep this simple, up to 50 characters
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="deliverables" className="block text-md font-medium text-gray-700 mb-1">
              Deliverables
            </label>
            <textarea
              id="deliverables"
              name="deliverables"
              value={formData.deliverables?.[0] || ""}
              onChange={(e) => handleTextareaArrayChange(e, "deliverables")}
              placeholder="Enter text here..."
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="seniorityLevel" className="block text-md font-medium text-gray-700 mb-1">
              Seniority Level
            </label>
            <select
              id="seniorityLevel"
              name="seniorityLevel"
              value={formData.seniorityLevel?.[0]}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            >
              <option value="junior">Junior</option>
              <option value="intermediate">Intermediate</option>
              <option value="senior">Senior</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-md font-medium text-gray-700 mb-1">
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

          <div className="mb-4">
            <label htmlFor="projectRequirements" className="block text-md font-medium text-gray-700 mb-1">
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
              {formData.projectRequirements?.map((req, index) => (
                <li key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span>{req}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveArrayItem(index, "projectRequirements")}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <label htmlFor="skillsNeeded" className="block text-md font-medium text-gray-700 mb-1">
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
              {formData.skillsNeeded?.map((skill, index) => (
                <li key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
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
              onClick={() => router.back()}
              className="w-2/5 px-6 py-2 border border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-3/5 px-6 py-2 text-white font-semibold bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              {loading ? "Updating..." : "Update Challenge"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditChallengeForm;