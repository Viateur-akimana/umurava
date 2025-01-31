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
        <main className="flex flex-col sm:space-y-16">
                <section className="bg-white h-full grid sm:grid-cols-2 gap-8 sm:gap-16 sm:px-24 py-4 sm:py-24" id="partnerWithUs">

                    <header className="flex flex-col pt-6 gap-4 sm:gap-8">
                        <h1 className="text-[#2B71F0] text-2xl sm:text-3xl sm:leading-tight font-bold">Accelerate Your Students and Traineess Employability and Career Growth through Project-based Learning Solution</h1>
                        <p className="text-[#2B3338] text-lg leading-8">We partner with Universities, Schools, and Trainining Institutions to build the work experience of their students and trainees through project based learning challenges and hackathons.</p>

                        <Button classNames="w-[200px] bg-primary text-white hover:bg-primary/90 font-semibold p-2 sm:p-3" label="Partner With Us" onClick={() => router.push('/hackathons')} />

                    </header>

                    <Image
                        aria-hidden
                        src={`/accelerate.png`}
                        alt={`Hero banner`}
                        layout="responsive"
                        width={200}
                        height={200}
                        objectFit="cover"
                        priority
                    />

                </section>

                <section className="bg-backgroundA h-full grid  mb-6 sm:grid-row-3 gap-8 sm:gap-16 sm:px-32" id="offerings">

                    <div className="flex flex-col text-center">
                        <h1 className="text-[#03192E] text-md sm:text-4xl sm:leading-tight font-bold">Key Offerings & Benefits:
                        </h1>
                    </div>

                    <div className="grid sm:grid-row-2 gap-2 sm:gap-4">

                        <div className="grid sm:grid-cols-3 gap-2 sm:gap-4">
                            <AboutCard
                                icon="/briefcase.png"
                                iconWidth={24}
                                iconHeight={24}
                                title="Employability and Career Development Opportunities"
                                desc="Students gain hands-on experience working on real-world challenges and help them build professional networks that increase their chances and readiness of landing job opportunities and this lead to career advancement and long-term succes." />
                            <AboutCard
                                icon="/briefcase.png"
                                iconWidth={24}
                                iconHeight={24}
                                title="Practical Application of Classroom Knowledge"
                                desc="The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses." />

                            <AboutCard
                                icon="/briefcase.png"
                                iconWidth={24}
                                iconHeight={24}
                                title="Students & Trainees Engagement"
                                desc="Embed and incorporate Skills Challenges into your courses to give students and trainees hands-on projects and practices that enhance their learning experience and skills mastery. Competitive and project-based challenges keep students motivated and actively engaged in their learning journey." />
                        </div>

                        <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 rounded-md">

                            <div className="grid sm:col-span-2">
                                <AboutCard
                                    icon="/briefcase.png"
                                    iconWidth={24}
                                    iconHeight={24}
                                    title="Access to the Industry Experts & Mentors"
                                    desc="Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the trends of digital careers. This can help students gain a deep understanding of their chosen field.." />
                            </div>

                            <div>
                                <AboutCard
                                    icon="/briefcase.png"
                                    iconWidth={24}
                                    iconHeight={24}
                                    title="Skills Assessments"
                                    desc="Embed our projects based tests and skills assessments directly into your curriculum." />
                            </div>
                        </div>

                    </div>

                </section>

                <section className="bg-background h-full grid sm:grid-row-2 gap-8  sm:gap-16 justify-items-center sm:px-24 sm:py-8" id="partners">
                    <div className="text-center mt-6 w-3/4">
                        <h1 className="text-xl text-[#03192E] sm:text-4xl sm:leading-tight font-bold">Join a few Educational Institutions using <br/> Skills Challenges by Umurava</h1>
                    </div>

                    <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-12">
                        {["tori.png", "gdg_kigali.png", "educationcollaborative.png", "kepler.png", "hiiL.png", "CIBA.png", "ared.png", "igihe.png", "viamo.png", "kepler.png", "laterite.png","SokoFund.png"].map((logo, index) => (
                            <Image
                                key={index}
                                aria-hidden
                                src={`/${logo}`}
                                alt={`education logo`}
                                width={180}
                                height={67}
                                objectFit="container"
                                priority
                            />
                        ))}
                    </div>

                </section>

                <section className="bg-backgroundA h-full w-ful grid gap-8 sm:gap-16 sm:grid-row-2 justify-items-center sm:px-24 py-4 sm:py-8" id="participate">
                    <div className="flex flex-col items-center justify-center text-center w-3/4 gap-4 sm:gap-8">
                        <h1 className="text-xl sm:text-4xl text-[#03192E] sm:leading-tight font-bold">How Skills Challenges Program can Be <br /> Integrated into your Learning Institution</h1>

                    </div>
                    <div className="grid gap-4 space-x-4 sm:grid-cols-2 sm:gap-8">
                        <div className="space-y-4 sm:space-y-6">
                            {[{ pos: 1, desc: "As Career Development and Job Readiness Program" }, { pos: 2, desc: "As Skills Assessments Method after a course or a term" }, { pos: 3, desc: "As extracurricular activities to complement academic courses" }, { pos: 4, desc: "As the portfolio of the Students" }, { pos: 5, desc: "As part of Capstone Projects or final-year assignments" }].map((item, index) => (
                                <div key={index} className="flex sm:gap-4 items-center">
                                    <button className={`h-6 sm:w-10 w-6 sm:h-10 bg-primary text-white rounded-full border border-black`}>
                                        {item.pos}
                                    </button>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <Image
                                aria-hidden
                                src={`/benefits.png`}
                                alt={`Hero banner`}
                                layout="responsive"
                                width={200}
                                height={200}
                                objectFit="cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                <Connect/>

</main>
</div>
    )
}

export default Institutions;