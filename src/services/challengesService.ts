import apiClient from "@/lib/utils/apiClient";

export interface Challengee {
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

export interface Pagination {
    page: number;
    limit: number;
    totalChallenges: number;
    totalPages: number;
}

export interface ChallengesResponse {
    data: Challengee[];
    pagination: Pagination;
}

export const getAllChallenges = async (status?: "open" | "ongoing" | "completed", page: number = 5, limit: number = 6) => {
    try {
        const params: Record<string, string | number> = { page, limit };
        if (status) params.status = status;

        const response = await apiClient.get<ChallengesResponse>("/challenges", { params });
        console.log("Data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching challenges:", error);
        throw error;
    }
};

export const getChallengeById = async (id: string): Promise<Challengee> => {
    try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem("token");

        // Include the token in the Authorization header
        const response = await apiClient.get(`/challenges/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Set the Authorization header with the token
            },
        });

        return response.data.data;
    } catch (error) {
        console.error("Error fetching challenge:", error);
        throw error;
    }
};