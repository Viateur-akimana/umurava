"use client";
import React from "react";
import ChallengeDetailsCard from "@/components/layout/subcomponents/ChallengeDetailsCard";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useChallengeById } from "@/hooks/useChallenges";

interface ChallengeDetailsPageProps {
  params: Promise<{
    id: string; 
  }>;
}

const ChallengeDetailsPage: React.FC<ChallengeDetailsPageProps> = ({ params }) => {
  const router = useRouter();

  const { id: challengeId } = React.use(params); 
  const { challenge, loading, error } = useChallengeById(challengeId);
  if (loading) {
    return <div className="w-full flex items-center justify-center">Loading challenge details...</div>;
  }

  if (error) {
    return <div className="w-full flex items-center justify-center text-red-600">{error}</div>;
  }

  if (!challenge) {
    return <div className="w-full flex items-center justify-center">Challenge not found</div>;
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
          {challenge.title}
        </span>
      </div>

      <div className="flex">
        <ChallengeDetailsCard
          title={challenge.title}
          projectBrief={challenge.projectBrief}
          productRequirements={challenge.projectRequirements}
          productDesigns={challenge.projectDescription}
          deliverables={challenge.deliverables}
          contactEmail={challenge.contactEmail}
          category={challenge.category}
          prize={challenge.moneyPrize}
          timeline={challenge.timeline}
        />
      </div>
    </div>
  );
};

export default ChallengeDetailsPage;
