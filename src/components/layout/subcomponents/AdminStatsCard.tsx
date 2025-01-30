import React from "react";
import { AdminStatsCardProps } from "@/types/status";
import { FileText, ChevronDown, MoveUp } from "lucide-react";

export const AdminStatsCard: React.FC<AdminStatsCardProps> = ({ title, count, rate }) => (
  <div className="bg-white p-4 border rounded-lg shadow-sm relative">
    <button className="absolute top-4 right-4 flex items-center text-sm text-[#98A2B3] hover:text-[#101928] transition">
      <h5>This Week</h5>
      <ChevronDown className="ml-1 text-[#98A2B3]" />
    </button>
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
