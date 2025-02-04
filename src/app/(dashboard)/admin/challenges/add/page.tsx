"use client";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import AddChallengeForm from "@/components/layout/AddChallengeForm";

const ChallengeDetailsPage: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center bg-white border h-16 pl-5 border-x-[#E4E7EC] space-x-3 text-md text-gray-600">
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-1 pl-6  hover:underline"
        >
          <FaArrowLeft className="text-2xl text-black border border-[#E4E7EC] p-1"/>
        </button>
        <span className="text-[#667185]">Go Back</span>
        <span className="text-gray-400">/</span>
        <span className="text-[#98A2B3]">Challenges & Hackathons</span>
        <span className="text-gray-400">/</span>
        <span className="text-[#2B71F0] hover:underline cursor-pointer">
          Create new challenge
        </span>
      </div>

      <div className="mx-auto">
        <AddChallengeForm/>
      </div>
    </div>
  );
};

export default ChallengeDetailsPage;
