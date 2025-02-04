import { LoginResponse, RegisterResponse } from '@/types/auth';
import apiClient from '@/lib/utils/apiClient';

export const login = async (email: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await apiClient.post<LoginResponse>(
            "/auth/login",
            { email, password }
        );
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
};

export const register = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
): Promise<RegisterResponse> => {
    try {
        const response = await apiClient.post<RegisterResponse>("/auth/signup", {
            firstName,
            lastName,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
};