import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAFB]">
      <Sidebar />
      <main className="ml-0 md:ml-44 lg:ml-64 pl-6">
        <Header />
        {children}
      </main>
    </div>
  );
}
