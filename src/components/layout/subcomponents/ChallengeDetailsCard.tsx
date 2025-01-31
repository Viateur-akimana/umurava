import React from "react";
import Image from "next/image";
import InstructionCard from "./InstructionCard";

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
  return (
    <div className="flex flex-col lg:flex-row md:flex-row gap-8 pt-8 px-2 lg:px-8 md:px-5 ">
      <div className="bg-white rounded-xl p-2 lg:p-8 md:p-3 max-w-2xl border border-[#E4E7EC]">
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
      <InstructionCard
      category="Web design"
      duration="7 Days"
      prize="$150 - $400"
      buttonText="Submit your work"
    />
    </div>
  );
};

export default ChallengeDetailsCard;
