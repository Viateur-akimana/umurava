'use client'
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { usePathname } from 'next/navigation';

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const NavigationWrapper = ({
  children
}: {
  children: React.ReactNode
}) => {
  const pathname = usePathname();
  const isInTalentDashboard = pathname.startsWith('/talent');
  const isInAdminDashboard = pathname.startsWith('/admin');

  if (isInTalentDashboard || isInAdminDashboard) {
    return <>{children}</>;
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
        className={`${workSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <NavigationWrapper>{children}</NavigationWrapper>
      </body>
    </html>
  );
}