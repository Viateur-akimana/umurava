"use client"
import React from "react";
import { FaEye } from "react-icons/fa";
import { ChallengeCard } from "@/components/layout/subcomponents/ChallengeCard"
// import { Challenge } from "@/types/challenge";
import { StatisticsCard } from "@/components/layout/subcomponents/StatisticsCard";
import { useRouter } from "next/navigation";
import { useChallenges } from "@/hooks/useChallenges";



const Dashboard: React.FC = () => {
  const router = useRouter();
  const { challenges, loading, error } = useChallenges(undefined, true); // Fetch only recent challenges
  console.log("Recent ones: ", challenges);

  return (
    <div className="flex-1 px-6 py-3">
      <div className="flex flex-col gap-3 sm:flex-row md:flex-row lg:flex-row justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-black mb-2">Welcome back Hilaire,</h1>
          <p className="text-[#475367]">
            Build Work Experience through Skills Challenges
          </p>
        </div>
        <div>
          <button className="flex items-center gap-2 bg-[#2B71F0] text-white text-nowrap px-4 py-2 rounded-lg">
            <FaEye />
            View Profile
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatisticsCard title="Completed Challenges" count="05" />
        <StatisticsCard title="Open Challenges" count="200" />
        <StatisticsCard title="Ongoing Challenges" count="200" />
      </div>
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-xl text-[#101928] font-bold">Recent Challenges</h2>
        <button
          className="text-[#2B71F0]"
          onClick={() => {
            router.push(`/talent/challenges`);
          }}
        >
          See all →
        </button>
      </div>

      {loading ? (
        <div className="w-full flex items-center justify-center">Loading challenges...</div>
      ) : error ? (
        <div className="w-full flex items-center justify-center text-red-600">{error}</div>
      ) : challenges.length === 0 ? (
        <div className="w-full flex items-center justify-center">No recent challenges found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge._id} challenge={challenge} />
          ))}
        </div>
      )}
    </div>
  );
};



export default Dashboard;
