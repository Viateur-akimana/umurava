/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { ChallengeCard } from "@/components/layout/subcomponents/ChallengeCard";
import { useChallenges } from "@/hooks/useChallenges";
import { useRouter } from "next/navigation";

interface ChallengesProps {
  isHomePage?: boolean; // Prop to determine if the component is on the homepage
}

const Challenges: React.FC<ChallengesProps> = ({ isHomePage = false }) => {
  const [selectedStatus, setSelectedStatus] = useState<"open" | "ongoing" | "completed" | undefined>(undefined);
  const { challenges, loading, page, totalPages, setPage } = useChallenges(selectedStatus);
  const router = useRouter();

  const handleViewMore = () => {
    router.push("/web/pages/challenges");
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="w-full p-6 lg:px-28 lg:py-12 bg-[#F9FAFB]">
      <h2 className="text-3xl font-bold text-center mb-6">
        Explore Challenges & Hackathons
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Join Skills Challenges Program to accelerate your career growth and
        become part of Africa’s largest workforce of digital professionals.
      </p>

      {loading ? (
        <div className="w-full flex items-center justify-center">Loading challenges...</div>
      ) : challenges.length === 0 ? (
        <div className="w-full flex items-center justify-center">No challenges available</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {challenges.map((challenge, index) => (
              <ChallengeCard key={index} challenge={challenge} isAdmin={true} />
            ))}
          </div>

          {/* Pagination Controls - Render only if NOT on homepage */}
          {!isHomePage && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 mx-1 border rounded-lg disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-4 py-2 mx-1">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="px-4 py-2 mx-1 border rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      {isHomePage && (
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
