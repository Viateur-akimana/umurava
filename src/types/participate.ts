export interface ParticipateResponse {
    message: string;
    challenge: {
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
        status: string;
        category: string;
        seniorityLevel: string[];
        skillsNeeded: string[];
        participants: string[];
        __v: number;
        createdAt: string;
        updatedAt: string;
    };
}