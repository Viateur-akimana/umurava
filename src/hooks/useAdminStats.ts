import { getAdminStats } from "@/services/adminStatsService";
import { useEffect, useState } from "react";

type StatDetail = {
  current: number;
  previous: number;
  changePercent: number;
};

// Define the overall stats type
type AdminStats = {
  totalChallenges: StatDetail;
  totalParticipants: StatDetail;
  completedChallenges: StatDetail;
  openChallenges: StatDetail;
  onGoingChallenges: StatDetail;
};

export const useAdminStats = (filter: string) => {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token from storage
        if (!token) throw new Error("No token found");

        const data = await getAdminStats(filter, token);
        setStats(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [filter]);

  return { stats, loading, error };
};
