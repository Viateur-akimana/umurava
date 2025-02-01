import Image from "next/image";
import React from "react";
import { Briefcase, Award, Shrub, GraduationCap } from "lucide-react";

interface Benefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: <Briefcase className="text-white text-3xl" />,
    title: "Enhance Your Employment Path",
    description:
      "Network with other talented individuals and learn from their experiences.",
  },
  {
    id: 2,
    icon: <Award className="text-white text-3xl" />,
    title: "Earn Recognition and Prizes",
    description:
      "Gain valuable experience and knowledge to advance your career in the digital economy.",
  },
  {
    id: 3,
    icon: <Shrub className="text-white text-3xl" />,
    title: "Personal Growth",
    description:
      "Challenge yourself, learn new skills, and expand your professional network.",
  },
  {
    id: 4,
    icon: <GraduationCap className="text-white text-3xl" />,
    title: "Learn from Industry Experts",
    description:
      "Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces.",
  },
];

const BenefitCard: React.FC<{ benefit: Benefit }> = ({ benefit }) => (
  <div className=" rounded-lg md:rounded-xl p-6 ">
    <div className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full mb-4">
      {benefit.icon}
    </div>
    <h3 className="font-bold text-lg text-[#03192E] mb-2">
      {benefit.title}
    </h3>
    <p className="text-sm text-gray-600">{benefit.description}</p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <div className="p-6 lg:p-20 bg-gray-50">
      <h2 className="text-3xl text-[#03192E] font-bold text-center mb-4">
      What else can I gain from participating in Skills Challenges ?
      </h2>
      <p className="text-center text-[#687588] mb-12">
        See what our clients say about working with us. Their success speaks for
        our dedication and expertise.
      </p>
      <div className="flex flex-col lg:flex-row gap-8 justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-2/3">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
        <div className="hidden lg:block lg:w-1/3">
          <Image
            src="/benefits.png"
            alt="Benefits Illustration"
            width={512}
            height={480}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
