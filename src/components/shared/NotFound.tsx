"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-md w-full">
        <h1 className="text-7xl font-extrabold text-blue-600">404</h1>
        <p className="text-2xl font-semibold text-gray-900 mt-4">
          Page Not Found
        </p>
        <p className="text-gray-600 mt-2">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-6 space-y-4">
          <button
            onClick={() => router.back()} 
            className="w-full bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go Back
          </button>

        </div>
      </div>
    </div>
  );
};

export default NotFound;
