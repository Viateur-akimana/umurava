/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChallengeDetailsCard from "@/components/layout/subcomponents/ChallengeDetailsCard";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { fetchChallengeById } from "@/lib/redux/features/challengesSlice";
import { RootState } from "@/lib/redux/store";

interface ChallengeDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ChallengeDetailsPage: React.FC<ChallengeDetailsPageProps> = ({ params }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  // Get challenge ID from params
  const { id: challengeId } = React.use(params);

  // Get challenge state from Redux
  const { currentChallenge, loading, error } = useSelector((state: RootState) => state.challenges);

  // Fetch challenge data when component mounts or ID changes
  useEffect(() => {
    if (challengeId) {
      dispatch(fetchChallengeById(challengeId) as any);
    }
  }, [dispatch, challengeId]);

  // Handle loading state
  if (loading) {
    return (
      <div className="w-full flex items-center justify-center">
        Loading challenge details...
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="w-full flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  // Handle case when challenge is not found
  if (!currentChallenge) {
    return (
      <div className="w-full flex items-center justify-center">
        Challenge not found
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center bg-white border h-16 border-x-[#E4E7EC] space-x-3 text-md text-gray-600">
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-1 pl-6 hover:underline"
        >
          <FaArrowLeft className="text-2xl text-black border border-[#E4E7EC] p-1" />
        </button>
        <span className="text-[#667185]">Go Back</span>
        <span className="text-gray-400">/</span>
        <span className="text-[#98A2B3]">Challenges & Hackathons</span>
        <span className="text-gray-400">/</span>
        <span className="text-[#2B71F0] hover:underline cursor-pointer">
          {currentChallenge.title}
        </span>
      </div>
      
      <div className="flex">
        <ChallengeDetailsCard
          title={currentChallenge.title}
          projectBrief={currentChallenge.projectBrief}
          productRequirements={currentChallenge.projectRequirements}
          productDesigns={currentChallenge.projectDescription}
          deliverables={currentChallenge.deliverables}
          contactEmail={currentChallenge.contactEmail}
          category={currentChallenge.category}
          prize={currentChallenge.moneyPrize}
          timeline={currentChallenge.timeline}
          challengeId={currentChallenge._id}

        />
      </div>
    </div>
  );
};

export default ChallengeDetailsPage;