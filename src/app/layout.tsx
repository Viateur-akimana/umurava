'use client'

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { usePathname } from 'next/navigation';

const workSans = Work_Sans({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-work-sans",
});

const NavigationWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  
  const isRestrictedArea = pathname.startsWith('/talent') || pathname.startsWith('/admin') || pathname.startsWith('/login') || pathname.startsWith('/signup');

  if (isRestrictedArea) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow py-6">{children}</main>
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
    <html lang="en" className={workSans.variable}>
      <body className="font-dm-sans antialiased min-h-screen flex flex-col bg-white">
        <NavigationWrapper>{children}</NavigationWrapper>
      </body>
    </html>
  );
}