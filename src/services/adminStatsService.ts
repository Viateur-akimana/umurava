import apiClient from "@/lib/utils/apiClient";

export const getAdminStats = async (filter: string = "this_week", token: string) => {
  try {
    const response = await apiClient.get(`/admin/stats`, {
      params: { filter },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    throw error;
  }
};
