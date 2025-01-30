import { Button } from "@/components/ui/button";
import Image from "next/image";
import router from "next/router";
import React from "react";

const Hero = () => {
  return (
    <section
      className="h-full grid sm:grid-cols-2 sm:px-24 sm:py-16 items-center"
      id="hero"
    >
      <div className="flex flex-col items-start mx-32  sm:gap-8 sm:pt-24">
        <header className="flex flex-col gap-4 sm:gap-8">
          <h1 className="text-primary text-2xl mt-0 sm:text-5xl sm:leading-tight font-bold">
            Build Work Experience through Skills Challenges Program
          </h1>
          <p className="text-black  text-xl leading-8">
            Enhance your Employability and Accelerate your Career Growth by
            working on Hands-on projects & hackathons from various businesses &
            organizations.
          </p>
        </header>
        <Button
          classNames="w-[200px] bg-primary text-white hover:bg-primary/90 font-semibold p-2 sm:p-3"
          label="Get Started"
          onClick={() => router.push("/hackathons")}
        />
      </div>

      <div className="flex-1">
        <Image
          aria-hidden
          src="/label.png"
          alt="hero"
          layout="responsive"
          width={200}
          height={180}
          objectFit="cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
