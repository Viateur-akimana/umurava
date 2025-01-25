"use client";
import React from "react";
import ChallengeDetailsCard from "@/components/layout/subcomponents/ChallengeDetailsCard";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const ChallengeDetailsPage: React.FC = () => {
  const router = useRouter();
  const projectBrief =
    "A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa. Is partnering with Umurava to launch a Payroll and HR Management System to Employers and Embedded Financial Services and products to Employees and Gig Workers across Africa.";
  const productRequirements = [
    "UX research to understand Project Requirements",
    "Understanding User Needs",
    "Understanding Business Goals",
    "Determine interaction between users",
    "Requirements Catalog",
  ];
  const productDesigns = [
    "User Interface Design for each step",
    "Creating wireframes to outline the basic structure and layout of the web and mobile app.",
    "Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience.",
    "Ensuring the web application works seamlessly across web, mobile, and tablet devices.",
    "Provide a feedback session for in-development guidance",
  ];
  const deliverables = [
    "Requirements Catalog and User Interaction Diagram",
    "User Interface Mockups",
    "Payroll and HR System Design (Completed)",
  ];

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
          Design a Dashboard for Sokofund
        </span>
      </div>

      <div className="flex mx-auto top-4 right-4">
        <ChallengeDetailsCard
          projectBrief={projectBrief}
          productRequirements={productRequirements}
          productDesigns={productDesigns}
          deliverables={deliverables}
        />
      </div>
    </div>
  );
};

export default ChallengeDetailsPage;
