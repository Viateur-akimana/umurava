"use client"

import React, { useState } from "react";
import { ChallengeCard } from "@/components/layout/subcomponents/ChallengeCard";
import { Challenge } from "@/types/challenge";

const challenges: Challenge[] = [
  {
    id: 1,
    title: "Design a Dashboard for SokoFund, Fintech Product",
    description: "Create a functional dashboard for a fintech product.",
    status: "Open",
    skillsNeeded: ["UI/UX Design", "User Research"],
    timeline: "15 Days",
    seniorityLevel: "(Junior, Intermediate, Senior)",
    companyLogo: "/umurva.png",
  },
  {
    id: 2,
    title: "Design a Dashboard for SokoFund for a Fintech Product",
    description: "Build an app to track user health metrics.",
    status: "Open",
    skillsNeeded: ["UI/UX Design", "User Research"],
    timeline: "15 Days",
    seniorityLevel: "(Junior, Intermediate, Senior)",
    companyLogo: "/umurva.png",
  },
  {
    id: 3,
    title: "Design a Dashboard for SokoFund for a Fintech Product",
    description: "Build an app to track user health metrics.",
    status: "Open",
    skillsNeeded: ["UI/UX Design", "User Research"],
    timeline: "15 Days",
    seniorityLevel: "(Junior, Intermediate, Senior)",
    companyLogo: "/umurva.png",
  },
  {
    id: 4,
    title: "Design a Dashboard for SokoFund, Fintech Product",
    description: "Create a functional dashboard for a fintech product.",
    status: "Open",
    skillsNeeded: ["UI/UX Design", "User Research"],
    timeline: "15 Days",
    seniorityLevel: "(Junior, Intermediate, Senior)",
    companyLogo: "/umurva.png",
  },
  {
    id: 5,
    title: "Design a Dashboard for SokoFund for a Fintech Product",
    description: "Build an app to track user health metrics.",
    status: "Open",
    skillsNeeded: ["UI/UX Design", "User Research"],
    timeline: "15 Days",
    seniorityLevel: "(Junior, Intermediate, Senior)",
    companyLogo: "/umurva.png",
  },
  {
    id: 6,
    title: "Design a Dashboard for SokoFund for a Fintech Product",
    description: "Build an app to track user health metrics.",
    status: "Open",
    skillsNeeded: ["UI/UX Design", "User Research"],
    timeline: "15 Days",
    seniorityLevel: "(Junior, Intermediate, Senior)",
    companyLogo: "/umurva.png",
  },
];

const Challenges: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="p-6 lg:px-28 lg:py-12">
      <h2 className="text-3xl font-bold text-center mb-6">
        Explore Challenges & Hackathons
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Join Skills Challenges Program to accelerate your career growth and
        become part of Africa’s largest workforce of digital professionals.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.slice(0, visibleCount).map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
      {visibleCount < challenges.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleViewMore}
            className="px-6 py-2 bg-white text-blue-600 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white font-semibold"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Challenges;
