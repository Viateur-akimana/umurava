import React from "react";
import Image from "next/image";
import { Challenge } from "@/types/challenge";
import { AdminStatsCard } from "@/components/layout/subcomponents/AdminStatsCard";




const Dashboard: React.FC = () => {
  const challenges: Challenge[] = [
    {
      id: 1,
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Create a functional dashboard for a fintech product.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/umurva.png",
    },
    {
      id: 2,
      title: "Design a Dashboard for SokoFund for a Fintech Product",
      description: "Build an app to track user health metrics.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/umurva.png",
    },
    {
      id: 3,
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
    <div className="flex-1 px-6 py-3">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Welcome back Hilaire,</h1>
          <p className="text-gray-600">
            Build Work Experience through Skills Challenges
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 mb-8">
        <AdminStatsCard title="Completed Challenges" count={4} rate={75} />
        <AdminStatsCard title="Open Challenges" count={200} rate={20} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <AdminStatsCard title="Completed Challenges" count={4} rate={75} />
        <AdminStatsCard title="Open Challenges" count={200} rate={20} />
        <AdminStatsCard title="Ongoing Challenges" count={15} rate={10} />
      </div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl text-[#101928] font-semibold">Recent Challenges</h2>
        <button className="text-blue-500">See all →</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} challenge={challenge} />
        ))}
      </div>
    </div>
  );
};



interface ChallengeCardProps {
  challenge: Challenge;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    <div className="relative">
      <div className="bg-blue-500 h-40 flex items-center justify-center">
        <Image
          src={challenge.companyLogo}
          alt="Company Logo"
          width={200}
          height={60}
          className="object-contain"
        />
      </div>
      <span className="absolute top-4 right-4 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
        {challenge.status}
      </span>
    </div>
    {/* content section */}
    <div className="p-6 space-y-4">
      <h3 className="font-semibold mb-4 text-lg">{challenge.title}</h3>
      {/* skills section */}
      <div>
        <p className="text-sm text-gray-600 mb-2">Skills Needed:</p>
        <div className="flex flex-row overflow-x-scroll scrollbar-hidden">
          {challenge.skillsNeeded.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full text-[10px] whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Seniority Level:{" "}
          <span className="text-gray-400">{challenge.seniorityLevel}</span>
        </p>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Timeline: <span>{challenge.timeline}</span>
        </p>
      </div>

      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        View Challenge
      </button>
    </div>
  </div>
);

export default Dashboard;
