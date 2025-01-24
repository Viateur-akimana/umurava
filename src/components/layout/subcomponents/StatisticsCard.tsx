import { StatsCardProps } from "@/types/status";
import { FileText } from 'lucide-react';


export const StatisticsCard: React.FC<StatsCardProps> = ({ title, count }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-1 h-12 bg-blue-500 rounded-full"></div>
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-2xl font-bold">{count}</p>
        </div>
      </div>
      <div className="bg-blue-100 p-2.5 rounded-full">
        <FileText className="text-[#2B71F0]"/>
      </div>
    </div>
  </div>
);
