"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Challenge } from "@/types/challenge";
import { AdminStatsCard } from "@/components/layout/subcomponents/AdminStatsCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { fetchAdminStats } from "@/lib/redux/features/adminStatsSlice";
import { fetchChallenges } from "@/lib/redux/features/challengesSlice";
import { useRouter } from "next/navigation";


const Dashboard: React.FC = () => {
  const [filter, setFilter] = useState("this_week");
  const [selectedStatus, setSelectedStatus] = useState<"open" | "ongoing" | "completed" | undefined>(undefined);
  const dispatch = useDispatch<AppDispatch>();
  const { stats, loading: statsLoading } = useSelector((state: RootState) => state.adminStats);
  const { challenges, loading: challengesLoading } = useSelector((state: RootState) => state.challenges);

   useEffect(() => {
    dispatch(fetchAdminStats(filter));
  }, [dispatch, filter]);
  
  useEffect(() => {
    dispatch(fetchChallenges({ status: selectedStatus, page: 1, limit: 6 }));
  }, [dispatch, selectedStatus]);


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
      {statsLoading ? (
        <div>Loading stats...</div>
      ) : (
        <>
          
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 mb-8">
        <AdminStatsCard
          title="All Challenges"
          count={stats?.totalChallenges?.current || 0}
          rate={stats?.totalChallenges?.changePercent || 0}
          filter={filter}
          onFilterChange={setFilter}
        />
        <AdminStatsCard
          title="All Participants"
          count={stats?.totalParticipants?.current || 0}
          rate={stats?.totalParticipants?.changePercent || 0}
          filter={filter}
          onFilterChange={setFilter}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <AdminStatsCard
          title="Completed Challenges"
          count={stats?.completedChallenges?.current || 0}
          rate={stats?.completedChallenges?.changePercent || 0}
          filter={filter}
          onFilterChange={setFilter}
        />
        <AdminStatsCard
          title="Open Challenges"
          count={stats?.openChallenges?.current || 0}
          rate={stats?.openChallenges?.changePercent || 0}
          filter={filter}
          onFilterChange={setFilter}
        />
        <AdminStatsCard
          title="Ongoing Challenges"
          count={stats?.onGoingChallenges?.current || 0}
          rate={stats?.onGoingChallenges?.changePercent || 0}
          filter={filter}
          onFilterChange={setFilter}
        />
      </div>
        </>)}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl text-[#101928] font-semibold">Recent Challenges</h2>
        <button className="text-blue-500">See all →</button>
      </div>

      {challengesLoading ? (
        <div>Loading challenges...</div>
      ) : challenges.length === 0 ? (
        <div>No challenges available</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={index} challenge={challenge} />
          ))}
        </div>
      )}
    </div>
  );
};



interface ChallengeCardProps {
  challenge: Challenge;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  const router = useRouter();

  const handleChallengeClick = (id: string) => {
    router.push(`/admin/challenges/${id}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-sm overflow-hidden w-full 
                 sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto
                 hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative">
        <div
          className="bg-[#2B71F0] m-3 sm:m-5 h-32 sm:h-40 
                     flex items-center justify-center rounded-md 
                     transition-transform group-hover:scale-105 duration-300"
        >
          <Image
            src="/umurva.png"
            alt="Company Logo"
            width={180}
            height={60}
            className="w-36 sm:w-48 md:w-56 h-auto object-contain"
          />
        </div>
        <span
          className="absolute top-4 right-4 sm:right-7 
                     bg-[#0F973D] text-white text-xs sm:text-sm 
                     px-2 sm:px-3 py-1 rounded-full"
        >
          {challenge.status}
        </span>
      </div>

      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3
          className="font-semibold text-base sm:text-lg text-[#101928] 
                     line-clamp-2"
        >
          {challenge.title}
        </h3>

        <div>
          <p className="text-xs sm:text-sm text-[#25272B] mb-2">
            Skills Needed:
          </p>
          <div className="flex flex-wrap gap-2">
            {challenge.skillsNeeded.map((skill, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 border border-[#2B71F0] 
                           text-[#2B71F0] rounded-md text-xs sm:text-sm
                           whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-[#171717] flex flex-wrap items-center">
            Seniority Level:{" "}
            <span className="text-[#475367] ml-1">
              {challenge.seniorityLevel}
            </span>
          </p>
          <p className="text-sm text-[#171717] flex flex-wrap items-center">
            Timeline:{" "}
            <span className="text-[#475367] ml-1">{challenge.timeline}</span>
          </p>
        </div>

        <hr className="border-[#E4E7EC]" />

        <div className="flex justify-center sm:justify-start pt-2">
          <button
            onClick={() => handleChallengeClick(challenge._id)}
            className="w-full sm:w-1/2 bg-[#2B71F0] text-white py-2 
                       rounded-lg hover:bg-blue-600 transition 
                       text-sm sm:text-base font-medium"
          >
            View Challenge
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
