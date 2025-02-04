import apiClient from "@/lib/utils/apiClient";
import { getAuthHeaders } from "@/lib/utils/helpers";
import { ParticipateResponse } from "@/types/participate";

export const participateInChallenge = async (
    challengeId: string
): Promise<ParticipateResponse> => {
    try {
        const response = await apiClient.patch<ParticipateResponse>(
            `/challenges/${challengeId}/participate`,
            {},
            { headers: getAuthHeaders() }
        );
        return response.data;
    } catch (error) {
        console.error("Error participating in challenge:", error);
        throw error;
    }
};


export const getParticipationStatus = async (challengeId: string) => {
    try {
        const response = await apiClient.get(
            `/challenges/${challengeId}/participation-status`,
            { headers: getAuthHeaders() }
        );
        return response.data;
    } catch (error) {
        console.log("error ", error);

        console.error("Failed to retrieve participation status:", error);
        throw error;
    }
};