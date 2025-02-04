/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { login, register } from '@/services/authService';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { RegisterResponse } from '@/types/auth';

export const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (email: string, password: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await login(email, password);
            const { token, isAdmin } = response.data;

            // Save token and admin status in localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("isAdmin", JSON.stringify(isAdmin));

            // Show success message
            toast.success("Login successful!");

            // Redirect based on user role
            router.push(isAdmin ? "/admin" : "/talent");
        } catch (err: unknown) {
            console.log("Error login", err);

            console.error("Login error:", err);
            const errorMessage = "Invalid email or password.";

            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { handleLogin, loading, error };
};

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const registerUser = async (
        firstName: string,
        lastName: string,
        email: string,
        password: string
    ) => {
        setIsLoading(true);
        setErrorMessage("");

        try {
            const response: RegisterResponse = await register(
                firstName,
                lastName,
                email,
                password
            );
            console.log(response.message);
            toast.success("Registration successful!");
            router.push("/login");
        } catch (error: unknown) {
            const errorMessage = "Password must 8 characters long";
            setErrorMessage(errorMessage);
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, errorMessage, registerUser };
};