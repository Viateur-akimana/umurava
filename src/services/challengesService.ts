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

export const getAllChallenges = async (status?: "open" | "ongoing" | "completed", page: number = 1, limit: number = 6) => {
    try {
        const params: Record<string, string | number> = { page, limit };
        if (status) params.status = status;

        const response = await apiClient.get<ChallengesResponse>("/challenges", { params });
        // console.log("Data", response.data);
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
        // console.log("Token got in services: ", token);


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


export const updateChallenge = async (challengeId: string, challengeData: object, token: string) => {
    try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage

        if (!token) {
            throw new Error("No authentication token found");
        }
        
        const response = await apiClient.put(`/challenges/${challengeId}`, challengeData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error updating challenge:", error);
        console.log("error while updating ", error);
        
        throw error;
    }
};



export const deleteChallenge = async (challengeId: string): Promise<void> => {
    try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage

        if (!token) {
            throw new Error("No authentication token found");
        }

        await apiClient.delete(`/challenges/${challengeId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error("Error deleting challenge:", error);
        throw error;
    }
};