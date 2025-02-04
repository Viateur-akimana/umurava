/* eslint-disable @typescript-eslint/no-explicit-any */
import  apiClient  from "@/lib/utils/apiClient";
import { getAuthHeaders } from "@/lib/utils/helpers";
import axios from "axios";
import { toast } from 'react-toastify';

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
        return response.data;
    } catch (error) {
        console.error("Error fetching challenges:", error);
        throw error;
    }
};

export const createChallenge = async (challengeData: Partial<Challengee>): Promise<Challengee> => {
    try {
        const headers = getAuthHeaders();
        if (!headers.Authorization) {
            toast.error("Please login to create a challenge");
            throw new Error("Authentication required");
        }

        const response = await apiClient.post("/challenges", challengeData, {
            headers
        });
        return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            const { data, status } = error.response || {};

            if (status === 400) {
                toast.error("Bad request: Please check your input data.");
            } else if (status === 401) {
                toast.error("Unauthorized: Your session has expired. Please log in again.");
            } else if (status === 500) {
                toast.error("Server error: Something went wrong. Please try again later.");
            } else {
                toast.error(`Unexpected error: ${data?.message || "Please try again later."}`);
            }
        } else if (error.request) {
            toast.error("No response from server: Please check your internet connection.");
        } else {
            toast.error(`Error: ${error.message || "An unknown error occurred"}`);
        }

        throw error;
    }
};
export const getChallengeById = async (id: string): Promise<Challengee> => {
    try {
        const response = await apiClient.get(`/challenges/${id}`, {
            headers: getAuthHeaders(),
        });        

        return response.data.data;
    } catch (error:any) {
        if (axios.isAxiosError(error)) {
            const { status } = error.response || {};
            if (status === 404) {
              toast.error("Challenge not found.");
            } else if (status === 401) {
              toast.error("Please login to view this challenge.");
            } else if (status === 403) {
              toast.error("You don't have permission to view this challenge.");
            } else {
              toast.error("Error loading challenge details.");
            }
          } else {
            toast.error("Network error. Please check your connection.");
          }
          throw error;
        }
    };


export const updateChallenge = async (challengeId: string, challengeData: Partial<Challengee>) => {
    try {
        const response = await apiClient.put(`/challenges/${challengeId}`, challengeData, {
            headers: getAuthHeaders(),
        });
        return response.data.data;
    } catch (error:any) {
        if (axios.isAxiosError(error)) {
            const { status } = error.response || {};
            if (status === 404) {
              toast.error("Challenge not found.");
            } else if (status === 401) {
              toast.error("Your session has expired. Please log in again.");
            } else if (status === 403) {
              toast.error("You don't have permission to update this challenge.");
            } else if (status === 400) {
              toast.error("Invalid data. Please check your inputs.");
            } else {
              toast.error("Failed to update challenge. Please try again.");
            }
          } else {
            toast.error("Network error. Please check your connection.");
          }
          throw error;
        }
    };


export const deleteChallenge = async (challengeId: string): Promise<void> => {
    try {
        await apiClient.delete(`/challenges/${challengeId}`, {
            headers: getAuthHeaders(),
        });
    } catch (error:any) {
        if (axios.isAxiosError(error)) {
            const { status } = error.response || {};
            if (status === 404) {
              toast.error("Challenge not found.");
            } else if (status === 401) {
              toast.error("Your session has expired. Please log in again.");
            } else if (status === 403) {
              toast.error("You don't have permission to delete this challenge.");
            } else {
              toast.error("Failed to delete challenge. Please try again.");
            }
          } else {
            toast.error("Network error. Please check your connection.");
          }
          throw error;
        }
    }
