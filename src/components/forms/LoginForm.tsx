/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Eye } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e: React.FormEvent) => {    
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "https://umurava-skill-challenge-backend.onrender.com/api/v1/auth/login",
        formData
      );
      
      if (response.status === 200) {
        const token = response.data.data.token;
        
        const isAdmin = response.data.data.isAdmin; 
        localStorage.setItem("token", token);
        localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
        if (isAdmin) {
          router.push("/admin");
        } else {
          router.push("/talent");
        }
      }
    } catch (error:any) {
      console.error("Error during login:", error);
      if (error.response) {
        setErrorMessage(error.response.data.message || "Authentication failed. Please try again.");
      } else {
        setErrorMessage("Network error. Please try again later.");
      }
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="mb-4 text-2xl font-bold text-center">Sign in</h2>
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-3 text-gray-600"
            >
              <Eye />
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Sign in
        </button>
        <div className="mt-4 text-center">
          <Link
            href="#"
            className="text-sm text-blue-500 underline hover:underline focus:outline-none"
          >
            Forgot your password?
          </Link>
        </div>
        <div className="mt-6 text-lg text-center">
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-500 text-md hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;