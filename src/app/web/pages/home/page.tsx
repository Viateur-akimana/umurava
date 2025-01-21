import Benefits from "../../../../components/layout/subcomponents/Benefits";
import Cta from "../../../../components/layout/subcomponents/Cta";
import Features from "../../../../components/layout/subcomponents/Features";
import Hero from "../../../../components/layout/subcomponents/Hero";
import Process from "../../../../components/layout/subcomponents/Process";
import Skills from "../../../../components/layout/subcomponents/Skills";
import Stats from "../../../../components/layout/subcomponents/Stats";
import Users from "../../../../components/layout/subcomponents/Users";
import Challenges from "../challenges/page";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero/>
      <Features/>
      <Stats/>
      <Skills/>
      <Challenges/>
      <Benefits/>
      <Users/>
      <Process/>
      <Cta/>
    </div>
  );
}
