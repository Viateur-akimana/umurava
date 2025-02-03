"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Challenge } from "@/types/challenge";
import { useUpdateChallenge } from "@/hooks/useChallenges";

interface EditChallengeFormProps {
  challenge: Challenge | null;
}

const EditChallengeForm: React.FC<EditChallengeFormProps> = ({ challenge }) => {
  const { handleUpdateChallenge, loading, error, success } = useUpdateChallenge();
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    duration: "",
    prize: "",
    contactEmail: "",
    projectBrief: "",
    projectDescription: "",
    description: [] as string[],
    requirements: [] as string[],
    deliverable: [] as string[],
  });

  useEffect(() => {
    if (challenge) {
      setFormData({
        title: challenge.title || "",
        deadline: challenge.deadline || "",
        duration: challenge.timeline || "",
        prize: challenge.moneyPrize || "",
        contactEmail: challenge.contactEmail || "",
        projectBrief: challenge.projectBrief || "",
        projectDescription: challenge.projectDescription?.join(", ") || "",
        description: challenge.projectDescription || [],
        requirements: challenge.projectRequirements || [],
        deliverable: challenge.deliverables || [],
      });
    }
  }, [challenge]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!challenge) return;

    const formattedData = {
      title: formData.title,
      deadline: formData.deadline,
      moneyPrize: formData.prize,
      contactEmail: formData.contactEmail,
      projectBrief: formData.projectBrief,
      projectDescription: formData.description,
      projectRequirements: formData.requirements,
      deliverables: formData.deliverable,
      seniorityLevel: ["JUNIOR"],
      category: "DESIGN",
      skillsNeeded: [],
    };

    await handleUpdateChallenge(challenge._id, formattedData);
  };

  return (
    <div className="w-full flex justify-center mx-auto my-6 items-center min-h-screen">
      <div className="bg-white py-6 px-4 lg:px-6 md:px-4 rounded-xl border w-full lg:w-3/5 md:w-4/5">
        <h1 className="text-xl font-semibold text-center mb-3">Edit Challenge</h1>
        <p className="text-center text-gray-600 mb-4 text-sm">Fill out these details to update your challenge</p>
        <form className="px-4 space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="title" className="block text-lg text-gray-600">Challenge Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg w-full px-3 py-2 outline-none focus:border-red-300 text-lg"
            />
          </div>
          <div className="flex items-center w-full gap-4">
            <div className="flex-1 space-y-2">
              <label htmlFor="deadline" className="block text-lg text-gray-600">Deadline</label>
              <input
                type="text"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="border border-gray-400 rounded-lg w-full px-3 py-2 outline-none focus:border-red-300 text-lg"
              />
            </div>
            <div className="flex-1 space-y-2">
              <label htmlFor="duration" className="block text-lg text-gray-600">Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="border border-gray-400 rounded-lg w-full px-3 py-2 outline-none focus:border-red-300 text-lg"
              />
            </div>
          </div>
          <div className="flex items-center w-full gap-4">
            <div className="flex-1 space-y-2">
              <label htmlFor="prize" className="block text-lg text-gray-600">Money Prize</label>
              <input
                type="text"
                name="prize"
                value={formData.prize}
                onChange={handleChange}
                className="border border-gray-400 rounded-lg w-full px-3 py-2 outline-none focus:border-red-300 text-lg"
              />
            </div>
            <div className="flex-1 space-y-2">
              <label htmlFor="contactEmail" className="block text-lg text-gray-600">Contact Email</label>
              <input
                type="text"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className="border border-gray-400 rounded-lg w-full px-3 py-2 outline-none focus:border-red-300 text-lg"
              />
            </div>
          </div>
          <div className="py-3 space-y-2">
            <label htmlFor="projectBrief" className="block text-lg text-gray-600">Project Brief</label>
            <textarea
              name="projectBrief"
              value={formData.projectBrief}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg w-full px-3 py-4 text-gray-500 outline-none focus:border-red-300 text-lg"
              rows={5}
            />
          </div>
          <div className="py-3 space-y-2">
            <label htmlFor="projectDescription" className="block text-lg text-gray-600">Project Description</label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg w-full px-3 py-4 text-gray-500 outline-none focus:border-red-300 text-lg"
              rows={5}
            />
          </div>
          <div className="py-3 space-y-2">
            <label htmlFor="requirements" className="block text-lg text-gray-600">Project Requirements</label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg w-full px-3 py-4 text-gray-500 outline-none focus:border-red-300 text-lg"
              rows={5}
            />
          </div>
          <div className="py-3 space-y-2">
            <label htmlFor="deliverable" className="block text-lg text-gray-600">Deliverables</label>
            <textarea
              name="deliverable"
              value={formData.deliverable}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg w-full px-3 py-4 text-gray-500 outline-none focus:border-red-300 text-lg"
              rows={5}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">Challenge updated successfully!</p>}
          <div className="flex items-center gap-8 w-full py-8">
            <button className="border-2 border-[#2B71F0] bg-white hover:bg-[#2B71F0] hover:text-white duration-500 text-[#2B71F0] rounded-lg py-4 px-6 text-lg w-1/3">
              Cancel
            </button>
            <button type="submit" className="border-2 border-[#2B71F0] bg-[#2B71F0] hover:bg-blue-800 duration-500 text-white rounded-lg py-4 px-6 text-lg">
              {loading ? "Updating..." : "Update Challenge"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditChallengeForm;