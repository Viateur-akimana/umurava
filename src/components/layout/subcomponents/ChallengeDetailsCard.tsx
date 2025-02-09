import React from "react";
import Image from "next/image";
import InstructionCard from "./InstructionCard";
import Participants from "./Participants";
import { usePathname } from "next/navigation"

interface ChallengeDetailsCardProps {
  challengeId: string;
  title: string;
  projectBrief: string;
  productRequirements: string[];
  productDesigns: string[];
  deliverables: string[];
  contactEmail: string;
  category: string;
  timeline: string;
  prize: string;
}


const ChallengeDetailsCard: React.FC<ChallengeDetailsCardProps> = ({
  title,
  projectBrief,
  productRequirements,
  productDesigns,
  deliverables,
  contactEmail,
  category,
  timeline,
  prize,
  challengeId
}) => {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");
  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 py-8 px-2 lg:px-8 md:px-5 ">
      <div className="lg:w-3/5 bg-white rounded-xl p-2 lg:p-8 md:p-3 border border-[#E4E7EC]">
        <div className="bg-[#2B71F0] h-80 w-512 mb-4 flex items-center justify-center rounded-md ">
          <Image
            src="/umurva.png"
            alt="logo"
            width={223}
            height={73}
            className="rounded-full"
          />
        </div>
        <h2 className="font-semibold mb-4">Project Brief : {title}</h2>
        <p className="mb-6 text-[#475367]">{projectBrief}</p>

        <h1 className="font-bold text-xl mb-2 text-black">Tasks: </h1>
        <h2 className="font-semibold text-black mb-4">Product Requirements</h2>
        <ul className="list-disc pl-6 mb-6 text-[#475367]">
          {productRequirements && productRequirements.length > 0 ? (
            productRequirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))
          ) : (
            <li>No product requirements available.</li>
          )}
        </ul>

        <h2 className="font-semibold text-black mb-4">Product Design:</h2>
        <ul className="list-disc pl-6 mb-6 text-[#475367]">
          {productDesigns && productDesigns.length > 0 ? (
            productDesigns.map((design, index) => (
              <li key={index}>{design}</li>
            ))
          ) : (
            <li>No product designs available.</li>
          )}
        </ul>

        <h2 className="font-semibold mb-4">Deliverables:</h2>
        <ul className="list-disc pl-6 mb-6 text-[#475367]">
          {deliverables && deliverables.length > 0 ? (
            deliverables.map((deliverable, index) => (
              <li key={index}>{deliverable}</li>
            ))
          ) : (
            <li>No deliverables available.</li>
          )}
        </ul>
      </div>
      <div className="flex flex-col xl:flex-col lg:flex-col md:flex-row gap-3">
        <InstructionCard
          contact={contactEmail}
          category={category}
          duration={timeline}
          prize={prize}
          challengeId={challengeId}
        />
        {isAdmin && (<Participants />)}

      </div>
    </div>
  );
};

export default ChallengeDetailsCard;
