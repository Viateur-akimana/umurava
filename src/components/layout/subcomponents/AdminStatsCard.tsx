"use client";

import React, { useState } from "react";
import { AdminStatsCardProps } from "@/types/status";
import { FileText, MoveUp } from "lucide-react";

export const AdminStatsCard: React.FC<AdminStatsCardProps> = ({ title, count, rate, filter, onFilterChange }) => {
  const [localFilter, setLocalFilter] = useState(filter);

  const handleFilterChange = (newFilter: string) => {
    setLocalFilter(newFilter);
    onFilterChange(newFilter); 
  };

  return (
    <div className="bg-white p-4 border rounded-lg shadow-sm relative">
      <select
        className="absolute top-4 right-4 bg-white border rounded px-2 py-1 text-sm text-[#98A2B3] hover:text-[#101928] transition"
        value={localFilter}
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value="this_week">This Week</option>
        <option value="last_30_days">Last 30 Days</option>
      </select>

      <div className="flex justify-between p-4 m-4 items-center">
        <div className="flex items-center gap-3">
          <div className="bg-[#D0E0FC] p-2.5 rounded-full">
            <FileText className="text-[#2B71F0]" />
          </div>
          <div>
            <p className="text-[#667185] text-ms ">{title}</p>
            <p className="flex text-2xl gap-4 text-black font-semiBold">
              {count}
              <span className="flex items-center bg-[#E7F6EC] rounded-full text-sm px-2 text-[#2B71F0]">
                <MoveUp size={14} className="inline" /> {rate}%
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
