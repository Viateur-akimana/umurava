/* eslint-disable @typescript-eslint/no-unused-vars */
import { getChallengeParticipants } from '@/services/participantsService';
import { useEffect, useState } from 'react';

interface Participant {
    fullName: string;
    email: string;
}

export const useChallengeParticipants = (
    challengeId: string,
    page: number = 1,
    limit: number = 6
) => {
    const [participants, setParticipants] = useState<Participant[]>([]);
    const [totalParticipants, setTotalParticipants] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchParticipants = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await getChallengeParticipants(challengeId, page, limit);

                if (Array.isArray(data)) {
                    setParticipants(data);
                    setTotalParticipants(data.length);
                } else {
                    setParticipants([]);
                    setTotalParticipants(0);
                }
            } catch (err) {
                setError("Failed to fetch participants.");
            } finally {
                setLoading(false);
            }
        };

        fetchParticipants();
    }, [challengeId, page, limit]);

    return { participants, totalParticipants, loading, error };
};
