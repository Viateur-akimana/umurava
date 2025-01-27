import React from "react";
import { FaEye } from "react-icons/fa";
import {ChallengeCard} from "@/components/layout/subcomponents/ChallengeCard"
import { Challenge } from "@/types/challenge";
import { StatisticsCard } from "@/components/layout/subcomponents/StatisticsCard";



const Dashboard: React.FC = () => {
  const challenges: Challenge[] = [
    {
      id:1,
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Create a functional dashboard for a fintech product.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/umurva.png",
    },
    {
      id:2,
      title: "Design a Dashboard for SokoFund for a Fintech Product",
      description: "Build an app to track user health metrics.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/umurva.png",
    },
    {
      id:3,
      title: "Design a Dashboard for SokoFund for a Fintech Product",
      description: "Build an app to track user health metrics.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/umurva.png",
    },
  ];

  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-y-auto m-10 px-6">
        <div className="flex-1 pt-6">
        
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-black mb-2">Welcome back Hilaire,</h1>
              <p className="text-[#475367]">
                Build Work Experience through Skills Challenges
              </p>
            </div>
            <button className="flex items-center gap-2 bg-[#2B71F0] text-white px-4 py-2 rounded-lg">
              <FaEye />
              View Profile
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <StatisticsCard title="Completed Challenges" count="05" />
            <StatisticsCard title="Open Challenges" count="200" />
            <StatisticsCard title="Ongoing Challenges" count="200" />
          </div>
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-xl text-[#101928] font-semiBold">Recent Challenges</h2>
            <button className="text-[#2B71F0]">See all →</button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <ChallengeCard key={index} challenge={challenge}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



export default Dashboard;
