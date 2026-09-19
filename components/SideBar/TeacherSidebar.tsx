'use client';
import { useSidebar } from "@/context/context"; // ya apna context import karein
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, LayoutDashboard, FileText, Calendar, UserRound, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const teacherMenuItems = [
  { label: "Dashboard", path: "/dashboard/teacher", icon: LayoutDashboard },
  { label: "Assignments", path: "/dashboard/teacher/assignments", icon: FileText },
  { label: "Attendance", path: "/dashboard/teacher/attendance", icon: Calendar },
];

const TeacherSidebar = () => {
  const { collapsed, setCollapsed, mobileMenu, setMobileMenu } = useSidebar();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`
        fixed left-0 top-0 z-50 h-screen
        border-r border-[#303030]
        bg-[#222222]
        transition-all duration-300
        w-[250px]
        ${collapsed ? "lg:w-[78px]" : "lg:w-[196px]"}
        ${mobileMenu ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
    >
      {/* LOGO SECTION */}
      <div className="relative flex h-[88px] items-center justify-center border-b border-[#303030]">
        <div className={`text-center ${collapsed ? "hidden lg:block" : "block"}`}>
          <div className="text-[27px] font-extrabold tracking-tight text-[#168bd3]">
            SMIT
          </div>
          <div className="text-[7px] tracking-wide text-gray-400">
            TEACHER PORTAL
          </div>
        </div>

        {collapsed && (
          <div className="hidden lg:block text-xl font-black text-[#168bd3]">
            S
          </div>
        )}

        {/* Desktop Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            absolute -right-3 top-[34px]
            hidden lg:flex
            h-6 w-6
            items-center justify-center
            rounded-full
            border border-[#3a3a3a]
            bg-[#222222]
            text-gray-400
            transition
            hover:bg-[#303030]
            hover:text-white
          "
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        {/* Mobile Close Button */}
        <button
          onClick={() => setMobileMenu(false)}
          className="absolute right-4 flex lg:hidden h-8 w-8 items-center justify-center rounded-md bg-[#303030] text-gray-300 hover:text-white"
        >
          <X size={18} />
        </button>
      </div>

      {/* NAVIGATION SECTION */}
      <nav className="px-2 py-5">
        {teacherMenuItems.map((item, index) => {
          const Icon = item.icon;
          const active = pathname === item.path;

          return (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06 }}
              onClick={() => {
                setMobileMenu(false);
                router.push(item.path);
              }}
              className={`
                group mb-2 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-[15px] transition-all
                ${collapsed ? "lg:justify-center lg:px-0" : ""}
                ${
                  active && !collapsed
                    ? "bg-[#2d2d2d] text-white"
                    : active && collapsed
                    ? "text-white"
                    : "text-[#a6a6a6] hover:bg-[#292929] hover:text-white"
                }
              `}
            >
              <Icon
                size={19}
                strokeWidth={1.8}
                className={active ? "text-white" : "text-[#9ca3af] group-hover:text-white"}
              />
              <span className={collapsed ? "lg:hidden" : "block"}>
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </nav>

      {/* USER SECTION */}
      <div
        className={`
          absolute bottom-0 left-0 flex w-full items-center gap-3 border-t border-[#303030] py-4 overflow-hidden
          ${collapsed ? "lg:justify-center lg:px-0 px-3" : "px-3"}
        `}
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#3b3b3b]">
          <UserRound size={20} className="text-gray-300" />
        </div>
        <div className={`truncate ${collapsed ? "lg:hidden" : "block"}`}>
          <p className="text-sm font-medium text-white">Trainer Panel</p>
        </div>
      </div>
    </motion.aside>
  );
};

export default TeacherSidebar;