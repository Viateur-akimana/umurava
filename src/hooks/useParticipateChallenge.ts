/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getParticipationStatus, participateInChallenge } from "@/services/participateService";
import { toast } from "react-toastify";

export const useParticipateInChallenge = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<unknown>(null);
    // const [participationStatus, setParticipationStatus] = useState<boolean>(false);

    const participate = async (challengeId: string, refetch: () => void) => {
        setLoading(true);
        setError(null);

        try {
            const response = await participateInChallenge(challengeId);
            setData(response);
            await refetch();
            toast.success("You've started this challenge!")
        } catch (err: any) {
            toast.error(err.message)
            setError("Failed to participate in the challenge.");
        } finally {
            setLoading(false);
        }
    };

    return { participate, loading, error, data };
};

export const useParticipationStatus = (challengeId: string) => {
    const [participationStatus, setParticipationStatus] = useState<boolean | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchStatus = async () => {
        setLoading(true);
        try {
            const data = await getParticipationStatus(challengeId);
            setParticipationStatus(data.participationStatus);
        } catch (err) {
            setError("Failed to retrieve participation status");
        } finally {
            setLoading(false);
        }
    };

    // Add refetch capability
    useEffect(() => {
        fetchStatus();
    }, [challengeId]);

    return {
        participationStatus,
        loading,
        error,
        refetch: fetchStatus // Expose refetch function
    };
};