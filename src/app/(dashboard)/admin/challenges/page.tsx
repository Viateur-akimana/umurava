"use client";

import React, { useEffect, useState } from "react";
import { ChallengeCard } from "@/components/layout/subcomponents/ChallengeCard";
import { FileText, Plus } from "lucide-react";
import Link from 'next/link';
import { useChallenges } from "@/hooks/useChallenges";

interface Item {
  label: string;
  status: "open" | "ongoing" | "completed" | undefined;
  isActive?: boolean;
}

const items: Item[] = [
  {
    label: "All challenges",
    status: undefined,
  },
  {
    label: "Completed challenges",
    status: "completed",
  },
  {
    label: "Open challenges",
    status: "open",
  },
  {
    label: "Ongoing challenges",
    status: "ongoing",
  },
];

const ChallengePage = () => {
  const [selectedStatus, setSelectedStatus] = useState<"open" | "ongoing" | "completed" | undefined>(undefined);
  const { challenges, challengeCounts, loading, page, totalPages, setPage } = useChallenges(selectedStatus);

  const handleItemClick = (item: Item) => {
    items.forEach((tab) => (tab.isActive = tab.label === item.label));
    setSelectedStatus(item.status);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (!loading) {
      // Optionally, you can fetch challenges again here if the status changes.
    }
  }, [selectedStatus, loading]);
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
            onClick={() => handleItemClick(item)}
            className={`flex items-center justify-center gap-3 px-2 border ${item.isActive ? "border-[#FCD2C2] bg-[#D0E0FC]" : "border-[#D0D5DD] bg-[#F0F2F5] hover:bg-white/10"} text-[#344054] py-3 rounded-lg transition-colors cursor-pointer`}
          >
            <FileText className={`h-4 w-4 ${item.isActive ? "text-[#2B71F0]" : "text-[#98A2B3]"}`} />
            <span className="text-sm text-nowrap font-medium text-[#344054]">
              {item.label}
            </span>
            <div className={`h-6 w-7 rounded-full flex items-center justify-center ${item.isActive ? "bg-[#2B71F0] text-white" : "bg-[#E4E7EC] text-[#344054]"}`}>
              <span>{item.status ? challengeCounts[item.status] : challengeCounts.all}</span>
            </div>
          </div>
        ))}
        <Link href={`/admin/challenges/add`} className="flex items-center justify-center bg-[#2B71F0] font-semibold text-lg text-white p-4 gap-1 rounded">
          <Plus />
          <span className="text-nowrap text-sm">Create New Challenge</span>
        </Link>
      </div>
      <hr className="text-[#E4E7EC] font-bold" />
      {loading ? (
        <div className="w-full flex items-center justify-center">Loading challenges...</div>
      ) : challenges.length === 0 ? (
        <div className="w-full flex items-center justify-center">No challenges available</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {challenges.map((challenge, index) => (
              <ChallengeCard key={index} challenge={challenge} />
            ))}
          </div>
          {/* Pagination Controls */}
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
        </>
      )}
    </div>
  );
};

export default ChallengePage;
