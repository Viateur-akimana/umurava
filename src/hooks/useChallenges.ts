/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { useEffect, useState } from "react";
import { Challengee, getAllChallenges, getChallengeById } from "@/services/challengesService";

export const useChallenges = (
    status?: "open" | "ongoing" | "completed",
    recent?: boolean
) => {
    const [challenges, setChallenges] = useState<Challengee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    // State to store count of challenges by status
    const [challengeCounts, setChallengeCounts] = useState({
        all: 0,
        open: 0,
        ongoing: 0,
        completed: 0,
    });

    useEffect(() => {
        const fetchChallenges = async () => {
            setLoading(true);
            setError(null);

            try {
                let data = await getAllChallenges(status, undefined, page);

                setTotalPages(data.pagination.totalPages);

                // Apply filtering for recent challenges
                if (recent) {
                    const oneWeekAgo = new Date();
                    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

                    data.data = data.data.filter(
                        (challenge) => new Date(challenge.createdAt) >= oneWeekAgo
                    );
                }

                // Compute timeline for each challenge
                data.data = data.data.map((challenge) => {
                    const createdAt = new Date(challenge.createdAt);
                    const deadline = new Date(challenge.deadline);
                    const timelineInDays = Math.ceil((deadline.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)); // Convert ms to days

                    return { ...challenge, timeline: `${timelineInDays} Days` };
                });

                setChallenges(data.data);

                // Compute counts for each challenge type
                const counts = {
                    all: data.data.length,
                    open: data.data.filter((ch) => ch.status === "open").length,
                    ongoing: data.data.filter((ch) => ch.status === "ongoing").length,
                    completed: data.data.filter((ch) => ch.status === "completed").length,
                };

                setChallengeCounts(counts);
            } catch (err) {
                setError("Failed to fetch challenges.");
            } finally {
                setLoading(false);
            }
        };

        fetchChallenges();
    }, [status, recent, page]);

    return { challenges, setChallenges, challengeCounts, loading, error, page, totalPages, setPage };
};


export const useChallengeById = (id: string) => {
    const [challenge, setChallenge] = useState<Challengee | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchChallenge = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await getChallengeById(id); // Fetch the challenge using its ID

                if (data) {
                    const today = new Date();
                    const deadline = new Date(data.deadline);
                    
                    let remainingDays = Math.ceil(
                        (deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
                    );

                    // Ensure the remaining days never go below 0
                    remainingDays = Math.max(remainingDays, 0);
                    
                    setChallenge({ ...data, timeline: `${remainingDays} Days` });
                    return;
                }

                setChallenge(data);
            } catch (err) {
                setError("Failed to fetch challenge.");
            } finally {
                setLoading(false);
            }
        };

        fetchChallenge();
    }, [id]); // Re-run the fetch when the id changes

    return { challenge, loading, error };
};