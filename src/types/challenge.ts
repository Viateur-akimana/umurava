export interface Challenge {
    // id:number;
    // title: string;
    // description: string;
    // status: "Open" | "Closed";
    // skillsNeeded: string[];
    // timeline: string;
    // seniorityLevel: string;
    // companyLogo: string;
    _id: string;
    title: string;
    deadline: string;
    moneyPrize: string;
    contactEmail: string;
    projectBrief: string;
    projectDescription: string[];
    projectRequirements: string[];
    deliverables: string[];
    createdBy: string;
    status: "open" | "ongoing" | "completed";
    category: string;
    timeline: string;
    seniorityLevel: string[];
    skillsNeeded: string[];
    participants: unknown[];
    createdAt: string;
    updatedAt: string;
  }

export interface ChallengeCardProps {
    challenge: Challenge;
  }