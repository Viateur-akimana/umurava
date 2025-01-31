'use client'
import { Challenge } from "@/types/challenge";
import React from "react";
import { ChallengeCard } from "@/components/layout/subcomponents/ChallengeCard";
import { FileText } from "lucide-react";


interface Item {
  label: string;
  count: number;
  isActive?: boolean;
}

const items: Item[] = [
  {
    label: "All challenges",
    count: 6,
    isActive: true,
  },
  {
    label: "Completed challenges",
    count: 2,
  },
  {
    label: "Open challenges",
    count: 3,
  },
  {
    label: "Ongoing challenges",
    count: 1,
  },
];
const handleItemClick = (label: string) => {
  items.forEach((item) => (item.isActive = item.label === label));
};
const ChallengePage = () => {
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
    {
      id: 4,
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Create a functional dashboard for a fintech product.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/umurva.png",
    },
    {
      id: 5,
      title: "Design a Dashboard for SokoFund for a Fintech Product",
      description: "Build an app to track user health metrics.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/umurva.png",
    },
    {
      id: 6,
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
          <h1 className="text-2xl font-bold text-black mb-2">Challenges</h1>
          <p className="text-[#667185]">
            Join a challenge or a hackathon to gain valuable work experience,
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-4">
        {items.map((item) => (
          <div
            key={item.label}
            onClick={() => handleItemClick(item.label)}
            className={`flex items-center justify-center gap-3 px-2 border ${item.isActive
                ? "border-[#FCD2C2] bg-[#D0E0FC]"
                : "border-[#D0D5DD] bg-[#F0F2F5] hover:bg-white/10"
              } text-[#344054] py-3 rounded-lg transition-colors cursor-pointer`}
          >
            <FileText className={`h-4 w-4 ${item.isActive ? "text-[#2B71F0]" : "text-[#98A2B3]"}`} />
            <span className="text-sm text-nowrap font-medium text-[#344054]">
              {item.label}
            </span>
            <div className={`h-6 w-7  rounded-full flex items-center justify-center ${item.isActive ? "bg-[#2B71F0] text-white " : "bg-[#E4E7EC] text-[#344054]"}`}>
              <span>{item.count}</span>
            </div>
          </div>
        ))}

      </div>
      <hr className="text-[#E4E7EC] font-bold" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} challenge={challenge} />
        ))}
      </div>
    </div>
  );
};

export default ChallengePage;
