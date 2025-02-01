"use client";

import React from "react";
import { UserCard } from "./UserCard";

export const usersData = Array.from({ length: 9 }).map((_, index) => ({
  key: index,
  image: `/video1.png`,
  name: "Manzi Jac",
  location: "Kigali",
  jobTitle: "Product Designer",
  imageWidth: 40,
  imageHeight: 40,
}));

const UserChallenges: React.FC = () => {
  return (
    <section
      className="h-full grid gap-24 sm:grid-row-2 sm:px-24 sm:py-16 py-8 px-4" 
      id="challenges"
    >
      <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-8 px-4 sm:px-8">
        <h1 className="w-full md:w-3/4 lg:w-1/2 text-[#03192E] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Users are in Love with Skills Challenges Program
        </h1>
        <p className="w-full md:w-3/4 lg:w-1/2 text-tertiaryColor text-sm sm:text-base md:text-lg">
          See what our clients say about working with us. Their success speaks
          for our dedication and expertise.
        </p>
      </div>

      <div className="flex sm:flex-row gap-4 sm:gap-8 w-full overflow-x-auto no-scrollbar z-0">
        {usersData.map((item, index) => (
          <UserCard
            key={index}
            image={item.image}
            name={item.name}
            location={item.location}
            jobTitle={item.jobTitle}
            imageWidth={item.imageWidth}
            imageHeight={item.imageHeight}
          />
        ))}
      </div>
    </section>
  );
};

export default UserChallenges;