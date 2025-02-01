import { Button } from "@/components/ui/button";
import Image from "next/image";
import router from "next/router";
import React from "react";

const Hero = () => {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 xl:mx-20 lg:mx-12 md:mx-5 mx-0 sm:px-8 items-center"
      id="hero"
    >
      <div className="flex flex-col items-start xl:mx-12 mx-0 py-4 gap-5">
        <header className="flex flex-col gap-4 sm:gap-8">
          <h1 className="text-primary text-4xl mt-0 sm:leading-tight font-bold">
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

      <div className="flex-1 p-5">
        <Image
          aria-hidden
          src="/label1.png"
          alt="hero"
          layout="responsive"
          width={200}
          height={180}
          objectFit="cover"
          priority
          className=""
        />
      </div>
    </section>
  );
};

export default Hero;
