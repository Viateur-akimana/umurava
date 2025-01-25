import React from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Sign up on Umurava Platform",
    description: "Submit your completed project for evaluation",
    image: "/signup.png",
  },
  {
    id: 2,
    title: "Browse Open Challenges",
    description:
      "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals",
    image: "/challenges.png",
  },
  {
    id: 3,
    title: "Register and Participate",
    description: "Sign up for the challenge and start working on the project.",
  },
  {
    id: 4,
    title: "Submit your work",
    description: "Submit your completed project for evaluation",
  },
  {
    id: 5,
    title: "Receive Feedback and Recognition",
    description: "Get feedback on your work and celebrate your achievements",
  },
];

const Process = () => {
  return (
    <div className="bg-gray-100 rounded-lg w-full ">
      <div className="p-8 lg:py-12 lg:px-28">
        <h2 className="text-2xl font-bold text-center mb-6">How to Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left section (2 steps with images) */}
          <div className="lg:grid lg:grid-rows-2 md:grid md:grid-rows-2 space-y-6">
            {steps.slice(0, 2).map((step) => (
              <div key={step.id} className="relative p-6 bg-white rounded-xl">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                  Step {step.id}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {step.image && (
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={150}
                    height={96}
                    className="absolute bottom-0 right-0 hidden md:block lg:block"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {steps.slice(2, 5).map((step) => (
              <div key={step.id} className="p-6 bg-white rounded-xl">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                  Step {step.id}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
