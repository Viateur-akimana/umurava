import React from "react";
import Image from "next/image";
import InstructionCard from "./InstructionCard";
import Participants from "./Participants";
import { usePathname} from "next/navigation"

interface ChallengeDetailsCardProps {
  projectBrief: string;
  productRequirements: string[];
  productDesigns:string[];
  deliverables: string[];
}

const ChallengeDetailsCard: React.FC<ChallengeDetailsCardProps> = ({
  projectBrief,
  productRequirements,
  productDesigns,
  deliverables,
}) => {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");
  return (
    <div className="flex space-x-8 m-12 left-4 ">
      <div className="bg-white rounded-xl  p-8 ml-10 max-w-2xl border border-[#E4E7EC]">
        <div className="bg-[#2B71F0] h-80 w-512 mb-4 flex items-center justify-center rounded-md ">
          <Image
            src="/umurva.png"
            alt="logo"
            width={223}
            height={73}
            className="rounded-full"
          />
        </div>
        <h2 className="font-semibold mb-4">Project Brief : Payroll and HR Management System</h2>
        <p className="mb-6 text-[#475367]">{projectBrief}</p>

        <h1 className="font-bold text-xl mb-2 text-black">Tasks: </h1>
        <h2 className="font-semibold text-black mb-4">Product Requirements</h2>
        <ul className="list-disc pl-6 mb-6 text-[#475367]">
          {productRequirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
        <h2 className="font-semibold text-black mb-4">Product Design:</h2>
        <ul className="list-disc pl-6 mb-6 text-[#475367]">
          {productDesigns.map((design, index) => (
            <li key={index}>{design}</li>
          ))}
        </ul>

        <h2 className="font-semibold mb-4">Deliverables:</h2>
        <ul className="list-disc pl-6 mb-6 text-[#475367]">
          {deliverables.map((deliverable, index) => (
            <li key={index}>{deliverable}</li>
          ))}
        </ul>
      </div>
      <div>
      <InstructionCard
      category="Web design"
      duration="7 Days"
      prize="$150 - $400"
    />
   {isAdmin && (<Participants/>)}
    
   </div>
    </div>
  );
};

export default ChallengeDetailsCard;
