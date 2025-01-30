import React from "react";
import { ProcessCard } from "./ProcessCard";


const Process = () => {
  return (
    <section className="bg-backgroundA h-full w-full grid gap-24 sm:grid-row-2 justify-items-center sm:px-32 sm:py-16" id="getStarted">
    <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-8">
      <h1 className="text-black text-xl sm:text-4xl font-bold">How to get started</h1>

    </div>

    <div className="w-full grid sm:grid-cols-3 gap-4 sm:gap-8">
      <div className="w-full grid sm:grid-row-2 gap-4 sm:gap-8">

        {[{ title: "Sign up on Umurava Platform", desc: "Submit your completed project for evaluation.", image: "/signup.png" }, { title: "Browse Open Challenges", desc: "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals.", image: "/challenges.png" }].map((item, index) => (
          <ProcessCard
            key={index}
            stepCount={index + 1}
            hasImage={true}
            image={item.image}
            title={item.title}
            desc={item.desc}
            imageWidth={200}
            imageHeight={200}
          />))}
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

  </section>
  );
};

export default Process;
