"use client";

import { useState } from "react";
import {
  LayoutGrid,
  Gamepad2,
  Users,
  BarChart3,
  Settings,
  AlertTriangle,
  LogOut,
  Menu,
  X,
  Wallet,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { icon: LayoutGrid, href: "/", label: "Dashboard" },
  { icon: Gamepad2, href: "/games", label: "Games" },
  { icon: Wallet, href: "/finance", label: "Finance" },
  { icon: Users, href: "/users", label: "Users" },
  { icon: BarChart3, href: "/analytics", label: "Analytics" },
  { icon: Settings, href: "/settings", label: "Settings" },
  { icon: AlertTriangle, href: "/reports", label: "Reports" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button — only visible below md breakpoint */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-30 w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white"
      >
        <Menu size={20} />
      </button>

      {/* Backdrop — only shows when drawer is open on mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/60 z-30"
        />
      )}

      {/* Sidebar itself */}
      <aside
        className={`
  fixed md:sticky top-0 left-0 h-screen w-24 md:w-20 bg-black
  flex flex-col items-start py-6 px-4 justify-between
  z-40 flex-shrink-0
  transition-transform duration-300
  ${isOpen ? "translate-x-0" : "-translate-x-full"}
  md:translate-x-0
`}
      >
        {/* Close button — mobile only, inside the open drawer */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden self-start text-gray-400 hover:text-white rounded-full bg-[#1a1a1a] p-2 mb-4 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-start gap-8 w-full">
          {/* Logo */}
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <span className="text-black font-bold">KT</span>
          </div>

          {/* Nav icons */}
          <nav className="flex flex-col gap-6 w-full items-start">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isActive
                      ? "bg-white text-black"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom logout icon */}
<Link
  href="/logout"
  onClick={() => setIsOpen(false)}
  className="w-10 h-10 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center hover:text-white"
>
  <LogOut size={18} />
</Link>
      </aside>
    </>
  );
}
