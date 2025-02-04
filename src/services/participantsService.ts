import apiClient from "@/lib/utils/apiClient";
import { getAuthHeaders } from "@/lib/utils/helpers";
import { ParticipantsResponse } from "@/types/participant";

export const getChallengeParticipants = async (
    challengeId: string,
    page: number = 1,
    limit: number = 6
): Promise<ParticipantsResponse> => {
    try {
        const response = await apiClient.get(
            `/challenges/${challengeId}/participants`,
            {
                params: { page, limit },
                headers: getAuthHeaders(),
            }
        );

        return response.data[0].participants;
    } catch (error) {
        console.error("Error fetching participants:", error);
        throw error;
    }
};