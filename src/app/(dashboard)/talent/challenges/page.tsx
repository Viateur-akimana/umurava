import { Challenge } from "@/types/challenge";
import React from "react";
import { ChallengeCard } from "@/components/layout/subcomponents/ChallengeCard";
import { FileText } from "lucide-react";

interface Item {
  label: string;
  count: number;
}

const items: Item[] = [
  {
    label: "All challenges",
    count: 0,
  },
  {
    label: "Completed challenges",
    count: 0,
  },
  {
    label: "Open challenges",
    count: 0,
  },
  {
    label: "Ongoing challenges",
    count: 0,
  },
];
const ChallengePage = () => {
  const challenges: Challenge[] = [
    {
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Create a functional dashboard for a fintech product.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/umurva.png",
    },
    {
      title: "Design a Dashboard for SokoFund for a Fintech Product",
      description: "Build an app to track user health metrics.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/umurva.png",
    },
    {
      title: "Design a Dashboard for SokoFund for a Fintech Product",
      description: "Build an app to track user health metrics.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/umurva.png",
    },
    {
      title: "Design a Dashboard for SokoFund, Fintech Product",
      description: "Create a functional dashboard for a fintech product.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/umurva.png",
    },
    {
      title: "Design a Dashboard for SokoFund for a Fintech Product",
      description: "Build an app to track user health metrics.",
      status: "Open",
      skillsNeeded: ["UI/UX Design", "User Research", "User Research"],
      timeline: "15 Days",
      seniorityLevel: "(Junior, Intermediate, Senior)",
      companyLogo: "/umurva.png",
    },
    {
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
    <div className="flex h-screen ">
      <div className="flex-1 overflow-y-auto m-10 px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-black mb-2">Challenges</h1>
            <p className="text-[#667185]">
              Join a challenge or a hackathon to gain valuable work experience,
            </p>
          </div>
        </div>
        <div className="mb-8 flex flex-row justify-between items-center ">
          <div className="flex gap-3">
            {" "}
            {items.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-2 border border-[#D0D5DD] bg-[#F0F2F5] text-[#344054] py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <FileText className="h-4 w-4 text-[#98A2B3]" />
                <span className="text-sm font-medium text-[#344054]">{item.label}</span>
                <span>{item.count}</span>
              </div>
            ))}
          </div>
        </div>
        <hr className="text-[#E4E7EC] font-bold"/>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={index} challenge={challenge} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;
