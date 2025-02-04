/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChallengeCard } from "@/components/layout/subcomponents/ChallengeCard";
import { useRouter } from "next/navigation";
import { 
  fetchChallenges,
  clearError
} from "@/lib/redux/features/challengesSlice"; // Adjust path as needed
import { RootState, AppDispatch } from "@/lib/redux/store"; // Adjust path as needed

interface ChallengesProps {
  isHomePage?: boolean;
}

const Challenges: React.FC<ChallengesProps> = ({ isHomePage = false }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  
  const {
    challenges,
    loading,
    error,
    pagination: { page, totalPages }
  } = useSelector((state: RootState) => state.challenges);

  // Fetch challenges on mount and when page changes
  useEffect(() => {
    dispatch(fetchChallenges({ page }));
    
    // Clear any errors when component unmounts
    return () => {
      dispatch(clearError());
    };
  }, [dispatch, page]);

  const handleViewMore = () => {
    router.push("/web/pages/challenges");
  };

  const handlePageChange = (newPage: number) => {
    dispatch(fetchChallenges({ page: newPage }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Explore Challenges & Hackathons
      </h1>
      
      <p className="mb-8">
        Join Skills Challenges Program to accelerate your career growth and 
        become part of Africa&apos;s largest workforce of digital professionals.
      </p>

      {loading ? (
        <div className="text-center py-8">Loading challenges...</div>
      ) : error ? (
        <div className="text-red-500 text-center py-8">{error}</div>
      ) : challenges.length === 0 ? (
        <div className="text-center py-8">No challenges available</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <ChallengeCard 
                key={challenge._id} 
                challenge={challenge} 
                isAdmin={true}
              />
            ))}
          </div>

          {/* Pagination Controls - Render only if NOT on homepage */}
          {!isHomePage && (
            <div className="flex justify-center items-center mt-8">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 mx-1 border rounded-lg disabled:opacity-50"
              >
                Previous
              </button>

              <span className="mx-4">
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

          {isHomePage && (
            <div className="text-center mt-8">
              <button
                onClick={handleViewMore}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                View More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Challenges;