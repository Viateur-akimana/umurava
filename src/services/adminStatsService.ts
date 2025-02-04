import apiClient from "@/lib/utils/apiClient";
import { getAuthHeaders } from "@/lib/utils/helpers";

export const getAdminStats = async (filter: string = "this_week") => {
  try {
    const response = await apiClient.get(`/admin/stats`, {
      params: { filter },
      headers: getAuthHeaders(),
    });
    
    return response.data;
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    throw error;
  }
};
