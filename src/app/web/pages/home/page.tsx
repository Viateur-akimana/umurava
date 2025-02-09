"use client";
import UserChallenges from "@/components/layout/subcomponents/Users";
import Benefits from "../../../../components/layout/subcomponents/Benefits";
import Cta from "../../../../components/layout/subcomponents/Cta";
import Features from "../../../../components/layout/subcomponents/Features";
import Hero from "../../../../components/layout/subcomponents/Hero";
import Process from "../../../../components/layout/subcomponents/Process";
import Skills from "../../../../components/layout/subcomponents/Skills";
import Stats from "../../../../components/layout/subcomponents/Stats";
import Challenges from "../challenges/page";

export default function Home() {
  return (
    <div className="flex flex-col sm:items-start ">
      <Hero />
      <Features />
      <Stats />
      <Skills />
      <Challenges />
      <Benefits />
      <UserChallenges />
      <Process />
      <Cta />
    </div>
  );
}
