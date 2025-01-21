"use client";

import { useEffect, useState } from "react";

type Challenge = {
  id: string;
  title: string;
  description: string;
  status: string;
};

const sampleChallenge: Challenge = {
  id: "1",
  title: "Sample Challenge",
  description: "This is a sample challenge description.",
  status: "active",
};

const TalentChallengeView = ({ params }: { params: { id?: string } }) => {
  const [challenge, setChallenge] = useState<Challenge>(sampleChallenge);

  useEffect(() => {
    if (params?.id) {
      fetch(`/api/challenges/${params.id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch challenge data");
          }
          return res.json();
        })
        .then((data) => setChallenge(data))
        .catch(() => setChallenge(sampleChallenge)); // Fallback to sample challenge on error
    }
  }, [params?.id]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{challenge.title}</h1>
      <p className="mt-4">{challenge.description}</p>
      <span
        className={`inline-block mt-2 ${
          challenge.status === "active" ? "text-green-500" : "text-red-500"
        }`}
      >
        {challenge.status}
      </span>
    </div>
  );
};

export default TalentChallengeView;
