"use client";

import React from "react";
import { UserCard } from "./UserCard";



export const usersData = Array.from({ length: 9 }).map((_, index) => ({
  key: index,
  image: `/video1.png`,
  name: 'Manzi Jac',
  location: 'Kigali',
  jobTitle: 'Product Designer',
  imageWidth: 40,
  imageHeight: 40,
}));
const UserChallenges: React.FC = () => {
  return (
    <section className="h-full grid gap-24 sm:grid-row-2 sm:px-24 sm:py-16" id="challenges">
    <div className="flex flex-col items-start gap-4 sm:gap-8">
      <h1 className="w-full sm:w-1/2 text-[#03192E] text-2xl sm:text-4xl font-bold">Users are in Love with Skills Challenges Program</h1>
      <p className="w-full sm:w-1/2 text-tertiaryColor">See what our clients say about working with us. Their success speaks for our dedication and expertise.</p>
    </div>
    <div className="flex sm:flex-row gap-4 sm:gap-8 w-full overflow-x-auto no-scrollbar z-0">
      {usersData.map((item, index) => (<UserCard
        key={index}
        image={item.image}
        name={item.name}
        location={item.location}
        jobTitle={item.jobTitle}
        imageWidth={item.imageWidth}
        imageHeight={item.imageHeight}
      />))}
    </div>
  </section>
  );
};

export default UserChallenges;
