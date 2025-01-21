'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Trophy, 
  Users, 
  Settings, 
  HelpCircle, 
  Share2,
  LogOut
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface FooterNavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const Sidebar = () => {
  const pathname = usePathname();

  const baseRoute = pathname.startsWith('/admin') ? '/admin' : '/talent';

  const mainNavItems: NavItem[] = [
    {
      label: 'Dashboard',
      href: `${baseRoute}/`,
      icon: LayoutDashboard,
    },
    {
      label: 'Challenges & Hackathons',
      href: `${baseRoute}/challenges`,
      icon: Trophy,
    },
    {
      label: 'Community',
      href: `${baseRoute}/community`,
      icon: Users,
    },
  ];

  const footerNavItems: FooterNavItem[] = [
    {
      label: 'Settings',
      href: `${baseRoute}/settings`,
      icon: Settings,
    },
    {
      label: 'Help Center',
      href: `${baseRoute}/help`,
      icon: HelpCircle,
    },
    {
      label: 'Refer family & friends',
      href: `${baseRoute}/refer`,
      icon: Share2,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-blue-600 text-white flex flex-col">
      <div className="p-6">
        <Link href={`${baseRoute}/dashboard`} className="flex items-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold">U</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-white/10' 
                      : 'hover:bg-white/5'
                    }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Navigation */}
      <div className="px-4 pb-6">
        <ul className="space-y-2">
          {footerNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 px-4 py-3 bg-white/10 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
              <Image
                width={40}
                height={40}
                src="/api/placeholder/32/32"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Hilaire Sh</p>
              <p className="text-xs text-white/70 truncate">hilaire@uidesign</p>
            </div>
            <button
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Logout"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
