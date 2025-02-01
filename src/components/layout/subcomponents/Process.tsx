import React from "react";
import { ProcessCard } from "./ProcessCard";

const Process = () => {
  const firstTwoSteps = [
    {
      title: "Sign up on Umurava Platform",
      desc: "Submit your completed project for evaluation.",
      image: "/signup.png"
    },
    {
      title: "Browse Open Challenges",
      desc: "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals.",
      image: "/challenges.png"
    }
  ];


  return (
    <section 
      className="bg-backgroundA w-full px-4 py-8 lg:px-32 lg:py-16" 
      id="getStarted"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-black text-2xl lg:text-4xl font-bold">
            How to get started
          </h1>
        </div>

        <div className="grid gap-4 md:gap-8">
          <div className="grid gap-4 md:gap-8 lg:grid-cols-3">
            <div className="space-y-4 md:space-y-8">
              {firstTwoSteps.map((item, index) => (
                <ProcessCard
                  key={index}
                  stepCount={index + 1}
                  hasImage={true}
                  image={item.image}
                  title={item.title}
                  desc={item.desc}
                  imageWidth={200}
                  imageHeight={200}
                />
              ))}
            </div>

        
             <div className="col-span-2 w-full grid sm:grid-row-3 gap-4 sm:gap-8">
       {[{ title: "Register and Participate", desc: "Sign up for the challenge and start working on the project." }, { title: "Submit your work", desc: "Submit your completed project for evaluation." }, { title: "Receive Feedback and Recognition", desc: "Get feedback on your work and celebrate your achievements." }].map((item, index) => (
          <ProcessCard
            key={index}
            stepCount={index + 3}
            hasImage={false}
            title={item.title}
            desc={item.desc}
          />))}
      
    </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
