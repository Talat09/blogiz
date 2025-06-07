"use client";

import { useEffect, useState } from "react";
import {
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineInbox,
  AiOutlineTeam,
  AiOutlineCalendar,
  AiOutlineCreditCard,
  AiOutlineSetting,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { SessionInterface } from "@/type";
import { decodedToken } from "@/utils/jwt";

export function DashboardSidebar({ session }: { session: SessionInterface }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const [userInfo, setUserInfo] = useState<any>(null); // Adjust type accordingly

  const token = (session as { accessToken?: string })?.accessToken;

  useEffect(() => {
    if (token) {
      const decodedData = decodedToken(token);
      console.log("decoded Data :", decodedData);
      setUserInfo(decodedData);
    }
  }, [token]);
  console.log("decoded user info :", userInfo);
  const navItems = [
    { href: "/dashboard", icon: <AiOutlineHome />, label: "Home" },
    {
      href: "/dashboard/blogs",
      icon: <AiOutlineInbox />,
      label: "All Blogs",
    },
    {
      href: "/dashboard/blogs/create",
      icon: <AiOutlineBarChart />,
      label: "Create Blog",
    },

    { href: "/dashboard/team", icon: <AiOutlineTeam />, label: "Team" },
    {
      href: "/dashboard/calendar",
      icon: <AiOutlineCalendar />,
      label: "Calendar",
    },
  ];

  const managementItems = [
    {
      href: "/dashboard/billing",
      icon: <AiOutlineCreditCard />,
      label: "Billing",
    },
    {
      href: "/dashboard/settings",
      icon: <AiOutlineSetting />,
      label: "Settings",
    },
  ];

  const handleLogout = async () => {
    await signOut({ callbackUrl: "https://blogiz-one.vercel.app" });
  };

  return (
    <div
      className={`bg-gray-100 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-800
        flex flex-col transition-width duration-300 ease-in-out
        ${collapsed ? "w-16" : "w-64"} z-50`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between border-b border-gray-300 dark:border-gray-700
          px-3 py-4 ${collapsed ? "justify-center" : "justify-between"}`}
      >
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
              <Image
                src={
                  session?.user?.image || "https://avatar.iran.liara.run/public"
                }
                alt="Avatar"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="uppercase font-semibold text-xs text-gray-900 dark:text-gray-100">
              {session?.user?.name ||
                userInfo?.email?.split("@")[0] ||
                "Dashboard"}
            </span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
        >
          <MdOutlineKeyboardArrowLeft
            className={`w-6 h-6 transform transition-transform duration-300 ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <div className="mt-4">
          {!collapsed && (
            <p className="px-4 mb-2 text-xs font-bold uppercase text-gray-600 dark:text-gray-400">
              Navigation
            </p>
          )}
          <ul>
            {navItems.map(({ href, icon, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center gap-3 px-4 py-2 rounded-md transition
                      ${collapsed ? "justify-center" : ""}
                      ${
                        isActive
                          ? "bg-accent text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                      }`}
                  >
                    <span className="w-5 h-5 flex-shrink-0 text-lg">
                      {icon}
                    </span>
                    {!collapsed && <span>{label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-6">
          {!collapsed && (
            <p className="px-4 mb-2 text-xs font-bold uppercase text-gray-600 dark:text-gray-400">
              Management
            </p>
          )}
          <ul>
            {managementItems.map(({ href, icon, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center gap-3 px-4 py-2 rounded-md transition
                      ${collapsed ? "justify-center" : ""}
                      ${
                        isActive
                          ? "bg-accent text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                      }`}
                  >
                    <span className="w-5 h-5 flex-shrink-0 text-lg">
                      {icon}
                    </span>
                    {!collapsed && <span>{label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className={`flex items-center gap-3 px-4 py-2 w-full rounded-md transition
              ${collapsed ? "justify-center" : ""}
              text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800`}
          >
            <span className="w-5 h-5 flex-shrink-0 text-lg">
              <CiLogout />
            </span>
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </nav>
    </div>
  );
}
