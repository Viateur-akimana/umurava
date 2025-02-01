"use client"
import React, { useEffect } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { useRouter } from 'next/navigation';

export default function TalentLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

   useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
      }
    }, [router]);
    
  return (
    <div className="flex h-screen bg-[#F9FAFB]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto" >
          {children}
        </main>
      </div>
    </div>
  );
}
