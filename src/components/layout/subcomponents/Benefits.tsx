import Image from "next/image";
import React from "react";
import { FaBriefcase, FaAward, FaUser, FaGraduationCap } from "react-icons/fa";

interface Benefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: <FaBriefcase className="text-white text-2xl" />,
    title: "Enhance Your Employment Path",
    description:
      "Network with other talented individuals and learn from their experiences.",
  },
  {
    id: 2,
    icon: <FaAward className="text-white text-2xl" />,
    title: "Earn Recognition and Prizes",
    description:
      "Gain valuable experience and knowledge to advance your career in the digital economy.",
  },
  {
    id: 3,
    icon: <FaUser className="text-white text-2xl" />,
    title: "Personal Growth",
    description:
      "Challenge yourself, learn new skills, and expand your professional network.",
  },
  {
    id: 4,
    icon: <FaGraduationCap className="text-white text-2xl" />,
    title: "Learn from Industry Experts",
    description:
      "Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces.",
  },
];

const Benefit: React.FC<{ benefit: Benefit }> = ({ benefit }) => (
  <div className="flex flex-col items-start p-4">
    <div className="p-3 bg-blue-600 rounded-xl">{benefit.icon}</div>
    <h3 className="font-bold text-lg mt-2">{benefit.title}</h3>
    <p className="text-gray-600 mt-2">{benefit.description}</p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <div className="p-6 lg:p-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">
        What else can I gain from participating in Skills Challenges?
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Join Skills Challenges Program to accelerate your career growth and
        become part of Africa’s largest workforce of digital professionals.
      </p>
      <div className="w-full flex justify-center gap-3">
        <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center">
          {benefits.map((benefit) => (
            <Benefit key={benefit.id} benefit={benefit} />
          ))}
        </div>
        <div className="hidden lg:block lg:w-[40%]">
            <Image
              src="/benefits.png"
              alt="Benefits Illustration"
              width={450}
              height={250}
            />
        </div>
      </div>
    </div>
  );
};

export default Benefits;