import { Challenge } from "@/types/challenge";
import Image from "next/image"

interface ChallengeCardProps {
    challenge: Challenge;
  }
  
 export const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative">
        <div className="bg-[#2B71F0] h-40 flex items-center m-5 justify-center rounded-md ">
          <Image
            src={challenge.companyLogo}
            alt="Company Logo"
            width={223}
            height={73}
            className="rounded-full"
          />
        </div>
        <span className="absolute top-4 right-7 bg-[#0F973D] text-white text-sm px-3 py-1 rounded-full">
          {challenge.status}
        </span>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="font-semibold mb-4 text-[#101928] text-lg">{challenge.title}</h3>
        <div>
          <p className="text-sm text-[#25272B] mb-2">Skills Needed:</p>
          <div className="flex flex-row  ">
            {challenge.skillsNeeded.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 border border-[#2B71F0]  text-[#2B71F0]  rounded-md text-sm mx-1  whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <p className=" text-[#171717]">
            Seniority Level:{" "}
            <span className="text-[#475367]">{challenge.seniorityLevel}</span>
          </p>
        </div>
  
        <div className="mb-4">
          <p className="text-[#171717] ">
            Timeline: <span className="text-[#475367]">{challenge.timeline}</span>
          </p>
        </div>
     <hr className="text-[#E4E7EC] font-bold"/>
        <button className="w-1/2 bg-[#2B71F0] text-white py-2 rounded-lg hover:bg-blue-600 transition font-sans">
          View Challenge
        </button>
      </div>
    </div>
  );