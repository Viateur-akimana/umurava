import apiClient from "@/lib/utils/apiClient";
import { getAuthHeaders } from "@/lib/utils/helpers";
import { TalentChallengeStats } from "@/types/stats";


export const getChallengeStats = async (): Promise<TalentChallengeStats> => {
    try {
        const response = await apiClient.get<TalentChallengeStats>("/challenges/talent/stats", {
            headers: getAuthHeaders(),
        });
        return response.data;
    } catch (error) {
        // console.error("Error fetching challenge stats:", error);
        throw error;
    }
};