"use client";
import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AboutCard } from "@/components/layout/subcomponents/AboutCard";
import Connect from "@/components/layout/subcomponents/connect";

const Institutions = () => {
  const router = useRouter();
  return (
    <div className="bg-backgroundA relative flex flex-col zoom-out font-sans">
      <main className="flex flex-col sm:space-y-4">
      <section 
      className="bg-white min-h-[calc(100vh-4rem)] md:min-h-0 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 lg:gap-16 px-4 sm:px-6 md:px-12 lg:px-24 py-6 md:py-4 lg:py-24"
      id="partnerWithUs"
    >
      <header className="flex flex-col justify-center pt-4 md:pt-3 gap-4 md:gap-6 lg:gap-8 order-2 md:order-1">
        <h1 className="text-[#2B71F0] text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
          Accelerate Your Students and Trainees Employability and Career Growth through Project-based Learning Solution
        </h1>
        <p className="text-[#2B3338] text-base sm:text-lg leading-7 md:leading-8">
          We partner with Universities, Schools, and Training Institutions to build the work experience of their students and trainees through project based learning challenges and hackathons.
        </p>
        <div className="mt-2 md:mt-4">
          <Button 
            classNames="w-full sm:w-auto min-w-[200px] bg-primary text-white hover:bg-primary/90 font-semibold p-2 sm:p-3" 
            label="Partner With Us"
            onClick={() => router.push('/hackathons')}
          />
        </div>
      </header>
      <div className="sm:block relative w-full aspect-square md:aspect-auto order-2">
        <Image
          src="/accelerate.png"
          alt="Hero banner"
          layout="responsive"
          width={200}
          height={200}
          objectFit="cover"
          priority
          className="rounded-lg"
        />
      </div>
    </section>

        <section
          className="bg-backgroundA px-3 sm:px-4 md:px-32 py-4 sm:py-8 md:py-16"
          id="offerings"
        >
          <div className="text-center mb-4 sm:mb-8 md:mb-12">
            <h1 className="text-[#03192E] text-lg sm:text-xl md:text-4xl font-bold">
              Key Offerings & Benefits:
            </h1>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 md:gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
              <AboutCard
                icon="/briefcase.png"
                iconWidth={24}
                iconHeight={24}
                title="Employability and Career Development Opportunities"
                desc="Students gain hands-on experience working on real-world challenges and help them build professional networks that increase their chances and readiness of landing job opportunities and this lead to career advancement and long-term success."
                className="p-3 sm:p-4 md:p-6"
              />
              <AboutCard
                icon="/briefcase.png"
                iconWidth={24}
                iconHeight={24}
                title="Practical Application of Classroom Knowledge"
                desc="The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses."
                className="p-3 sm:p-4 md:p-6"
              />
              <AboutCard
                icon="/briefcase.png"
                iconWidth={24}
                iconHeight={24}
                title="Students & Trainees Engagement"
                desc="Embed and incorporate Skills Challenges into your courses to give students and trainees hands-on projects and practices that enhance their learning experience and skills mastery."
                className="p-3 sm:p-4 md:p-6"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-8">
              <AboutCard
                icon="/briefcase.png"
                iconWidth={24}
                iconHeight={24}
                title="Access to Industry Experts & Mentors"
                desc="Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the trends of digital careers. This can help students gain a deep understanding of their chosen field."
                className="p-3 sm:p-4 md:p-6"
              />
              <AboutCard
                icon="/briefcase.png"
                iconWidth={24}
                iconHeight={24}
                title="Skills Assessments"
                desc="Embed our projects based tests and skills assessments directly into your curriculum."
                className="p-3 sm:p-4 md:p-6"
              />
            </div>
          </div>
        </section>
        <section
          className="bg-background px-3 sm:px-4 md:px-24 py-6 sm:py-8 md:py-16"
          id="partners"
        >
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-[#03192E] text-lg sm:text-xl md:text-4xl font-bold">
              Educational Institutions Using Skills Challenges by Umurava
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-8 justify-items-center">
            {[
              "tori.png",
              "gdg_kigali.png",
              "educationcollaborative.png",
              "kepler.png",
              "hiiL.png",
              "CIBA.png",
              "ared.png",
              "igihe.png",
              "viamo.png",
              "laterite.png",
              "SokoFund.png",
            ].map((logo, index) => (
              <div
                key={index}
                className="w-full max-w-[100px] sm:max-w-[120px] md:max-w-[180px]"
              >
                <Image
                  src={`/${logo}`}
                  alt="education logo"
                  layout="responsive"
                  width={180}
                  height={67}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </section>

        <section
          className="bg-backgroundA px-4 sm:px-24 py-8 sm:py-16"
          id="participate"
        >
          <div className="text-center mb-8">
            <h2 className="text-[#03192E] text-xl sm:text-4xl font-bold">
              How Skills Challenges Program Can Be Integrated
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              {[
                "Career Development and Job Readiness Program",
                "Skills Assessments Method after a course or term",
                "Extracurricular activities to complement academic courses",
                "Student Portfolio Development",
                "Capstone Projects or final-year assignments",
              ].map((desc, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="text-base">{desc}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Image
                aria-hidden
                src={`/benefits.png`}
                alt={`Integration benefits`}
                width={400}
                height={400}
                objectFit="contain"
              />
            </div>
          </div>
        </section>

        <Connect />
      </main>
    </div>
  );
};

export default Institutions;
