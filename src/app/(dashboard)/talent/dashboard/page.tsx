
"use client"
import React,{useEffect} from "react";
import { FaEye } from "react-icons/fa";
import { ChallengeCard } from "@/components/layout/subcomponents/ChallengeCard"
import { StatisticsCard } from "@/components/layout/subcomponents/StatisticsCard";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { fetchChallengeStats } from "@/lib/redux/features/talentStatsSlice";
import { fetchChallenges } from "@/lib/redux/features/challengesSlice";



const Dashboard: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchChallenges({ status: undefined, page: 1, limit: 6 })); // Fetch recent challenges
    dispatch(fetchChallengeStats());
  }, [dispatch]);

  const { challenges, loading: challengesLoading, error: challengesError } = useSelector(
    (state: RootState) => state.challenges
  );

  const { stats, loading: statsLoading, error: statsError } = useSelector(
    (state: RootState) => state.talentStats
  );
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
      {statsLoading ? (
        <div className="w-full flex items-center justify-center">Loading stats...</div>
      ) : statsError ? (
        <div className="w-full flex items-center justify-center text-red-600">{statsError}</div>
      ) : challenges.length === 0 ? (
        <div className="w-full flex items-center justify-center">No recent challenges found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatisticsCard
          title="Completed Challenges"
          count={stats?.completedChallenges ?? 0}
        />
        <StatisticsCard
          title="Open Challenges"
          count={stats?.openChallenges ?? 0}
        />
        <StatisticsCard
          title="Ongoing Challenges"
          count={stats?.ongoingChallenges ?? 0}
        />
      </div>
      )}
    
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

      {challengesLoading ? (
        <div className="w-full flex items-center justify-center">Loading challenges...</div>
      ) : challengesError ? (
        <div className="w-full flex items-center justify-center text-red-600">{challengesError}</div>
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
