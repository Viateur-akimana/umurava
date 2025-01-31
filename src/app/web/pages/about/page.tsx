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
      <main className="flex flex-col sm:space-y-16">
        <section
          className="bg-white h-full grid sm:grid-cols-2 gap-8 sm:gap-16 sm:px-24 py-4 sm:py-24"
          id="videoIntro"
        >
          <header className="flex flex-col mb-2 gap-4 sm:gap-8 sm:pt-24">
            <h1 className="text-primary text-lg sm:text-4xl sm:leading-tight font-bold">
              Our story
            </h1>
            <p className="text-lg">
              With 3 years of experience matching African digital talents to
              local and global job markets, we still remain with a big number of
              jobs that remain unfilled due to the lack of experienced African
              Talents.
            </p>
            <p className="text-lg">
              {" "}
              Driven by our mission to place skilled and professional digital
              talent, we created Skills Challenges as a project-based learning
              solution for talents to gain real-world experience, solve
              problems, and build portfolios so that they become ready for
              global job markets.
            </p>
          </header>

          <div className="flex gap-2 sm:gap-4 w-full rounded-xl bg-primary">
            <video className="w-full rounded-xl" controls muted autoPlay loop>
              <source
                src="https://s3-figma-videos-production-sig.figma.com/video/1138095499391701229/TEAM/f945/38b3/-9844-4599-a3ad-736e0dbdf70d?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eg0cd7h0XKB9fI61G25u4rWjusfiCaPI1SH26F3Qe-MKuTsNDcnEa-G0mEywJvEo9zvT2PkmO9I2jsbSLiZ1UpV9Y3NE4UfMoXmNXOZ-qZWEHs7kuVGkHpiU26lbl-qz9mMU36eoI6mHlo7W8a5Z1ON6HIdact4ATdi7LCRWQ1hVSr41uChpWxxklKzdHjkrrM39yyoyW-4BXTvheQnbW4CQLK1JSwYTbgsuWfCUHwr3cchpREL-HqQSfLF0Yw3b2AVB5NvWsEhyqqFxnc~ovkBUl0h4YB3DCzUifvP8DBDJ-XNJPViZk-6mqGIhoWVC583jptHYRvOIl8YJGXAOfg__"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section
          className="h-full grid gap-8 sm:gap-16 sm:grid-row-3 sm:px-32 my-0 sm:py-8"
          id="career"
        >
          <div className="flex flex-col text-center gap-4 sm:gap-8">
            <h1 className="text-[#2B3338] text-xl sm:text-4xl sm:leading-tight font-bold">
              Why we are solving this problem
            </h1>
          </div>

          <div className="grid gap-2 sm:gap-4 sm:grid-row-2">
            <AboutCard
              icon="/briefcase.png"
              iconWidth={24}
              iconHeight={24}
              title="Bridging the Experience Gap"
              desc="Many talents acquired theoretical knowledge and are rejected from jobs because they lack work experience and are not able to put in actions what they acquired in the schools."
            />

            <div className="grid gap-2 sm:gap-4 sm:grid-cols-2 rounded-md">
              <AboutCard
                icon="/briefcase.png"
                iconWidth={24}
                iconHeight={24}
                title="Bridging Education and Employment"
                desc="Traditional education doesn't always prepare talents for the demands of the tech and digital economy and we are providing in-demand skills through Skills Challenges."
              />
              <AboutCard
                icon="/briefcase.png"
                iconWidth={24}
                iconHeight={24}
                title="Preparing Talents for Global Job Markets"
                desc="We are ensuring that African talents shine globally and that's why we are equipping them with global technical experience and standout globally."
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
