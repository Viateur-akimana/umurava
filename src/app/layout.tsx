'use client'
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
//  const metadata: Metadata = {
//   title: "UMURAVA",
//   description: "A platform connecting talent with opportunities",
// };

// Create a wrapper component to handle the conditional rendering
const NavigationWrapper = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  const pathname = usePathname();
  const isInTalentDashboard = pathname.startsWith('/talent');
  const isInAdminDashboard = pathname.startsWith('/admin');
  
  if (isInTalentDashboard) {
    return <>{children}</>;
  }
  if(isInAdminDashboard){
    return <>{children}</>
  }
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow mb-4 mt-1">{children}</main>
      <Footer />
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <NavigationWrapper>{children}</NavigationWrapper>
      </body>
    </html>
  );
}