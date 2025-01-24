export interface Challenge {
    title: string;
    description: string;
    status: "Open" | "Closed";
    skillsNeeded: string[];
    timeline: string;
    seniorityLevel: string;
    companyLogo: string;
  }