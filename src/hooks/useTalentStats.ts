/* eslint-disable @typescript-eslint/no-unused-vars */
import { getChallengeStats } from '@/services/talentStatsService';
import { TalentChallengeStats } from '@/types/stats';
import { useEffect, useState } from 'react';

export const useTalentStats = () => {
    const [stats, setStats] = useState<TalentChallengeStats | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await getChallengeStats();
                setStats(data);
            } catch (err) {
                setError("Failed to fetch challenge stats.");
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return { stats, loading, error };
};