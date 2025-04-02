"use client";

import { useState } from "react";
import { Home, History, Wallet, Settings2, Info, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();

  const MenuList = [
    { name: "Home", icon: Home, path: "/dashboard" },
    { name: "History", icon: History, path: "/dashboard/history" },
    { name: "Billing", icon: Wallet, path: "/dashboard/billing" },
    { name: "Setting", icon: Settings2, path: "/dashboard/setting" },
    { name: "About", icon: Info, path: "/dashboard/about" },
  ];

  return (
    <nav className="bg-gradient-to-br from-green-100 via-indigo-200 to-blue-200 p-4 shadow-md fixed w-full top-0 z-50 flex items-center justify-between">
      <Image src="/txtlogo.png" alt="logo" width={120} height={60} />
      <button
        className="text-gray-700 focus:outline-none md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg w-64 p-5 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>
        <div className="flex flex-col items-center gap-4 mt-10">
          {MenuList.map((menu) => (
            <Link
              key={menu.name}
              href={menu.path}
              className={`flex gap-3 items-center p-3 w-full rounded-lg text-lg font-medium transition-all hover:bg-primary hover:text-white ${
                path === menu.path ? "bg-primary text-white" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              <menu.icon />
              {menu.name}
            </Link>
          ))}
          <div className="mt-5 bg-primary px-4 py-2 rounded-full text-white flex gap-3 items-center cursor-pointer">
            <UserButton />
            <span>User Profile</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;
