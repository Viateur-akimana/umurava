"use client";
import { ChallengeCardProps } from "@/types/challenge";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ChallengeCardComponentProps extends ChallengeCardProps {
  isAdmin?: boolean; 
}

export const ChallengeCard: React.FC<ChallengeCardComponentProps> = ({ challenge, isAdmin = false }) => {
  const router = useRouter();

  const handleChallengeClick = (id: string) => {
    const role = isAdmin ? "admin" : "talent";
    router.push(`/${role}/challenges/${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full 
                    sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto
                    hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <div className="bg-[#2B71F0] m-3 sm:m-5 h-32 sm:h-40 
                      flex items-center justify-center rounded-md 
                      transition-transform group-hover:scale-105 duration-300">
          <Image
            src="/umurva.png"
            alt="Company Logo"
            width={180}
            height={60}
            className="w-36 sm:w-48 md:w-56 h-auto object-contain"
          />
        </div>
        <span className="absolute top-4 right-4 sm:right-7 
                       bg-[#0F973D] text-white text-xs sm:text-sm 
                       px-2 sm:px-3 py-1 rounded-full">
          {challenge.status}
        </span>
      </div>

      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className="font-semibold text-base sm:text-lg text-[#101928] 
                     line-clamp-2">
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