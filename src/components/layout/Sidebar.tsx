"use client";

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import Home from "../../../public/logo.png";
// import LayoutDashboard from "../../../public/house.png";
import { House } from 'lucide-react';
// import Trophy from "../../../public/files.png";
import { FileText } from 'lucide-react';
// import Users from "../../../public/users.png";
import { UserPlus } from 'lucide-react';
import Settings from "../../../public/settings.png";
import HelpCircle from "../../../public/headset.png";
import Share2 from "../../../public/gift.png";
import LogOut from "../../../public/sign-out.png";
import profile from "../../../public/Image.png";


interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface FooterNavItem {
  label: string;
  href: string;
  icon: StaticImageData;
}

const Sidebar = () => {
  const pathname = usePathname();

  const baseRoute = pathname.startsWith("/admin") ? "/admin" : "/talent";

  const mainNavItems: NavItem[] = [
    {
      label: "Dashboard",
      href: `${baseRoute}/dashboard`,
      icon: House,
    },
    {
      label: "Challenges & Hackathons",
      href: `${baseRoute}/challenges`,
      icon: FileText,
    },
    {
      label: "Community",
      href: `${baseRoute}/community`,
      icon: UserPlus,
    },
  ];

  const footerNavItems: FooterNavItem[] = [
    {
      label: "Settings",
      href: `${baseRoute}/settings`,
      icon: Settings,
    },
    {
      label: "Help Center",
      href: `${baseRoute}/help`,
      icon: HelpCircle,
    },
    {
      label: "Refer family & friends",
      href: `${baseRoute}/refer`,
      icon: Share2,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-272  bg-[#2B71F0] text-white flex flex-col px-5">
      <div className="pt-10 pb-4 pl-8">
        <Link href={`${baseRoute}/dashboard`} className="flex items-center">
          <div className="flex items-center justify-center">
            <Image src={Home} alt="Home" width={55} height={35} />
          </div>
        </Link>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-2 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-white text-[#2B71F0]"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                 {React.createElement(item.icon)}
                  <span
                    className={isActive ? "text-[#2B71F0] font-medium" : "text-white font-medium"}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="pb-4">
        <ul className="space-y-2">
          {footerNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-3 px-2 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6  py-3  rounded-lg flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
            <Image
              width={40}
              height={40}
              src={profile}
              alt="Profile"
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Hilaire Sh</p>
            <p className="text-xs text-white/70 truncate">hilaire@uidesign</p>
          </div>
          <button
            className="pr-9 rounded-full transition-colors"
            aria-label="Logout"
          >
            <Image src={LogOut} alt="Log out" width={18} height={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
