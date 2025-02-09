"use client";
import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AboutCard } from "@/components/layout/subcomponents/AboutCard";
import { Button } from "@/components/ui/button";

const About = () => {
  const router = useRouter();
  return (
    <div className="bg-backgroundA elative flex flex-col zoom-out">
      <main className="flex flex-col sm:space-y-16 ">
        <section
          className="bg-white h-full flex flex-col sm:grid sm:grid-cols-2 gap-8 sm:gap-16 px-6 sm:px-24 py-8 sm:py-24"
          id="videoIntro"
        >
          <header className="flex flex-col gap-4 sm:gap-8">
            <h1 className="text-primary text-xl sm:text-4xl font-bold leading-snug">
              Our Story
            </h1>
            <p className="text-base sm:text-lg leading-relaxed">
              With 3 years of experience matching African digital talents to
              local and global job markets, we still remain with a big number of
              jobs that remain unfilled due to the lack of experienced African
              talents.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Driven by our mission to place skilled and professional digital
              talent, we created Skills Challenges as a project-based learning
              solution for talents to gain real-world experience, solve
              problems, and build portfolios so that they become ready for
              global job markets.
            </p>
          </header>
          <div className="w-full rounded-xl bg-primary overflow-hidden aspect-video">
            <video
              className="w-full h-full rounded-xl"
              controls
              muted
              autoPlay
              loop
            >
              <source
                src="https://s3-figma-videos-production-sig.figma.com/video/1138095499391701229/TEAM/f945/38b3/-9844-4599-a3ad-736e0dbdf70d?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eg0cd7h0XKB9fI61G25u4rWjusfiCaPI1SH26F3Qe-MKuTsNDcnEa-G0mEywJvEo9zvT2PkmO9I2jsbSLiZ1UpV9Y3NE4UfMoXmNXOZ-qZWEHs7kuVGkHpiU26lbl-qz9mMU36eoI6mHlo7W8a5Z1ON6HIdact4ATdi7LCRWQ1hVSr41uChpWxxklKzdHjkrrM39yyoyW-4BXTvheQnbW4CQLK1JSwYTbgsuWfCUHwr3cchpREL-HqQSfLF0Yw3b2AVB5NvWsEhyqqFxnc~ovkBUl0h4YB3DCzUifvP8DBDJ-XNJPViZk-6mqGIhoWVC583jptHYRvOIl8YJGXAOfg__"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section
          className="px-4 md:px-8 lg:px-32 py-6 md:py-8 space-y-6 md:space-y-8"
          id="career"
        >
          <div className="flex flex-col text-center space-y-3 md:space-y-4">
            <h1 className="text-[#2B3338] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight px-2">
              Why we are solving this problem
            </h1>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-6">
            <div className="w-full">
              <AboutCard
                icon="/briefcase.png"
                iconWidth={24}
                iconHeight={24}
                title="Bridging the Experience Gap"
                desc="Many talents acquired theoretical knowledge and are rejected from jobs because they lack work experience and are not able to put in actions what they acquired in the schools."
                // className="h-full p-4 md:p-6"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <AboutCard
                icon="/briefcase.png"
                iconWidth={24}
                iconHeight={24}
                title="Bridging Education and Employment"
                desc="Traditional education doesn't always prepare talents for the demands of the tech and digital economy and we are providing in-demand skills through Skills Challenges."
                // className="h-full p-4 md:p-6"
              />
              <AboutCard
                icon="/briefcase.png"
                iconWidth={24}
                iconHeight={24}
                title="Preparing Talents for Global Job Markets"
                desc="We are ensuring that African talents shine globally and that's why we are equipping them with global technical experience and standout globally."
                // className="h-full p-4 md:p-6"
              />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-14">
            <div className="z-10 max-w-lg text-center md:text-left">
              <h1 className="text-3xl text-[#041738] md:text-3xl font-bold leading-tight">
                Skills Challenges Program is built on the Umurava Talent
                Marketplace Platform
              </h1>
              <p className="mt-4 text-xl text-[#2B3338]">
                A Project-based Learning Solution aimed at providing young and
                senior talents with an opportunity to showcase their skills to
                real-world projects and challenges from our partner companies
                and organizations. <br />
                <br />
                Umurava Skills Challenges enables young talents to build a
                portfolio and experience that increases their readiness to
                access job opportunities and projects.
              </p>
              <Button
                classNames="w-[200px] mt-4 bg-primary text-white hover:bg-primary/90 font-semibold p-2 sm:p-3"
                label="Get Started"
                onClick={() => router.push("/hackathons")}
              />
            </div>
            <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center">
              <Image
                src="/challenges-page.png"
                alt="hero image"
                width={500}
                height={100}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
