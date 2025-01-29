"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { House, FileText, UserPlus } from "lucide-react";
import Settings from "../../../public/settings.png";
import HelpCircle from "../../../public/headset.png";
import Share2 from "../../../public/gift.png";
import LogOut from "../../../public/sign-out.png";
import profile from "../../../public/Image.png";
import Modal from "./Modal";

const Sidebar = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseRoute = pathname.startsWith("/admin") ? "/admin" : "/talent";

  const mainNavItems = [
    { label: "Dashboard", href: `${baseRoute}/dashboard`, icon: House },
    { label: "Challenges & Hackathons", href: `${baseRoute}/challenges`, icon: FileText },
    { label: "Community", href: "#", icon: UserPlus, onClick: () => setIsModalOpen(true) },
  ];

  const footerNavItems = [
    { label: "Settings", href: `${baseRoute}/settings`, icon: Settings },
    { label: "Help Center", href: `${baseRoute}/help`, icon: HelpCircle },
    { label: "Refer family & friends", href: `${baseRoute}/refer`, icon: Share2 },
  ];

  return (
    <div className={`fixed top-0 left-0 h-screen transition-all ${expanded ? "w-64" : "w-14"} bg-[#2B71F0] text-white flex flex-col`}>


      <div className="pt-10 pb-4 pl-4 flex items-center justify-between">
        <Link href={`${baseRoute}/dashboard`} className="flex items-center gap-2">
          <Image src="/web.png" alt="Home" width={35} height={35} className="" />
          {expanded && (
            <span className="text-xl font-semibold">Logo</span>
          )}
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 px-2">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="group">
                <Link
                  href={item.href}
                  onClick={item.onClick}
                  className={`flex items-center gap-4 px-2 py-3 rounded-lg transition-colors ${isActive
                    ? "bg-white text-[#2B71F0] flex items-center"
                    : "hover:bg-white/10"
                    }`}
                >
                  {React.createElement(item.icon, { size: 20 })}
                  {expanded && <span className="font-medium">{item.label}</span>}
                  {!expanded && (
                    <div className="absolute left-full rounded-md px-2 py-1 ml-2 bg-indigo-100 text-indigo-800 text-sm font-semibold text-nowrap invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                      {item.label}
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="pb-4 px-2">
        <ul className="space-y-2">
          {footerNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-4 px-2 py-3 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <Image src={item.icon} alt={item.label} width={20} height={20} />
                {expanded && <span className="font-medium text-sm">{item.label}</span>}
                {!expanded && (
                    <div className="absolute left-full rounded-md px-2 py-1 ml-2 bg-indigo-100 text-indigo-800 text-sm font-semibold text-nowrap invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                      {item.label}
                    </div>
                  )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-4 px-2">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
            <Image src={profile} alt="Profile" width={40} height={40} />
          </div>
          {expanded && (
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">Hilaire Sh</p>
              <p className="text-xs text-white/70 truncate">hilaire@uidesign</p>
            </div>
          )}
          <button
            className="ml-auto hover:text-red-500 transition-colors"
            aria-label="Logout"
          >
            <Image src={LogOut} alt="Logout" width={18} height={18} />
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Sidebar;