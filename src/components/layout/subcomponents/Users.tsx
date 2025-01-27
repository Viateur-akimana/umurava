"use client";

import React, { useRef, useEffect, useState } from "react";

interface UserChallenge {
  id: number;
  name: string;
  title: string;
  location: string;
}

const userChallenges: UserChallenge[] = [
  { id: 1, name: "Manzi Jack", title: "Product Designer", location: "Kigali" },
  { id: 2, name: "Amina Sarah", title: "UX Researcher", location: "Nairobi" },
  { id: 3, name: "Kwizera John", title: "Software Engineer", location: "Accra" },
  { id: 4, name: "Mugisha Diane", title: "Data Scientist", location: "Lagos" },
  { id: 5, name: "Jane Doe", title: "AI Specialist", location: "Cape Town" },
  { id: 6, name: "John Smith", title: "Cybersecurity Expert", location: "Cairo" },
];

const UserChallenges: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentDotIndex, setCurrentDotIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1); // Dynamic number of items per page

  // Update itemsPerPage dynamically based on screen width
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3); // Large screens
      else if (window.innerWidth >= 768) setItemsPerPage(2); // Medium screens
      else setItemsPerPage(1); // Small screens
    };

    updateItemsPerPage(); // Initial setup
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Calculate the number of dots
  const totalDots = Math.ceil(userChallenges.length / itemsPerPage);

  // Track scrolling to update the active dot
  useEffect(() => {
    const container = containerRef.current;

    const onScroll = () => {
      if (container) {
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const newDotIndex = Math.floor(scrollLeft / containerWidth);
        setCurrentDotIndex(newDotIndex);
      }
    };

    container?.addEventListener("scroll", onScroll);
    return () => {
      container?.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="p-6 lg:p-12">
      <h2 className="text-3xl font-bold text-center mb-4">
        Users are in Love with Skills Challenges Program
      </h2>
      <p className="text-center text-gray-500 mb-8">
        See what our clients say about working with us. Their success speaks
        for our dedication and expertise.
      </p>
      <div className="relative">
        <div
          ref={containerRef}
          className="flex overflow-x-scroll space-x-4 snap-x snap-mandatory no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {userChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`snap-start flex-shrink-0 px-2`}
              style={{
                flexBasis: `${100 / itemsPerPage}%`,
              }}
            >
              <div className="p-4 flex flex-col items-center text-center border rounded-lg shadow-lg">
                <div className="w-full bg-blue-500 h-40 rounded-md flex justify-center items-center">
                  <div className="bg-white p-4 rounded-full">
                    <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center">
                      ▶️
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg mt-4">{challenge.name}</h3>
                <p className="text-gray-500">{challenge.title}</p>
                <p className="text-gray-400">{challenge.location}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalDots }).map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentDotIndex === idx ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserChallenges;
