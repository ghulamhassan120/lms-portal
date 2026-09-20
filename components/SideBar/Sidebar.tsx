"use client";
import { menuItems } from "@/config/menu";
import { ContextType, SidebarContext, useSidebar } from "@/context/context";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  LogOut,
  Moon,
  Sun,
  UserRound,
  X,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";

const Sidebar = () => {
  const {
    setActiveMenu,
    setMobileMenu,
    collapsed,
    mobileMenu,
    activeMenu,
    setCollapsed,
    theme,
    setTheme,
  } = useSidebar();
  const router = useRouter();
  const pathname = usePathname();
  
  const handleMenuClick = (label: any) => {
    setActiveMenu(label);
    setMobileMenu(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isLight = theme === "light";
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsOpen(false); // Dropdown band kar dein
    // localStorage.removeItem("userToken");
    router.push("/login");
  };

  return (
    <>
      <motion.aside
        initial={{ x: -80, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
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
          {!collapsed ? (
            <div className="text-center">
              <div className="text-[27px] font-extrabold tracking-tight text-[#168bd3]">
                SMIT
              </div>
              <div className="text-[7px] tracking-wide text-gray-400">
                SAYLANI MASS IT TRAINING
              </div>
            </div>
          ) : (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="absolute top-[34px] hidden lg:flex h-6 w-6 items-center justify-center rounded-full border border-[#3a3a3a] bg-[#222222] text-gray-400 transition hover:bg-[#303030] hover:text-white"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {!collapsed && (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="absolute -right-3 top-[34px] hidden lg:flex h-6 w-6 items-center justify-center rounded-full border border-[#3a3a3a] bg-[#222222] text-gray-400 transition hover:bg-[#303030] hover:text-white"
            >
              <ChevronLeft size={14} />
            </button>
          )}

          <button
            onClick={() => setMobileMenu(false)}
            className="absolute right-4 flex lg:hidden h-8 w-8 items-center justify-center rounded-md bg-[#303030] text-gray-300 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="px-2 py-5">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const active = pathname === item.path;
            return (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 }}
                onClick={() => {
                  handleMenuClick(item.label);
                  router.push(item.path);
                }}
                className={`
                  group mb-2 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-[15px] transition-all
                  ${
                    active && !collapsed
                      ? isLight
                        ? "bg-[#0f5bf3] text-black"
                        : "bg-[#2d2d2d] text-white"
                      : active && collapsed
                      ? "text-white"
                      : `text-[#a6a6a6] ${isLight ? "hover:text-black" : "hover:text-white"}`
                  }
                `}
              >
                <Icon
                  size={19}
                  strokeWidth={1.8}
                  className={
                    active
                      ? "text-white"
                      : isLight
                      ? "text-[#9ca3af] group-hover:text-black"
                      : "text-[#9ca3af] group-hover:text-white"
                  }
                />
                <span className={`${collapsed ? "lg:hidden" : "block"}`}>
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </nav>

        {/* USER PROFILE FOOTER TRIGGER */}
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute bottom-0 left-0 flex w-full items-center gap-3 border-t border-[#303030] px-3 py-4 cursor-pointer"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#3b3b3b]">
            <UserRound size={20} className="text-gray-300" />
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-medium text-white">Ghulam Hassan</p>
            </div>
          )}
        </div>
      </motion.aside>

      {/* DROPDOWN MENU WITH DYNAMIC POSITIONING */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={`fixed bottom-16 z-[99] w-[160px] rounded-xl border border-[#383838] ${
              isLight ? "bg-[#fff] text-black" : "bg-[#232323] text-white"
            } p-1.5 shadow-2xl pointer-events-auto ${
              collapsed ? "left-[85px]" : "left-[205px]"
            }`}
          >
            {/* Profile Route Navigation */}
            <button
              onClick={() => {
                setIsOpen(false);
                router.push("/dashboard/student/profile");
              }}
              className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left text-[13px] transition-colors hover:bg-[#303030] hover:text-white"
            >
              <UserRound size={18} strokeWidth={1.7} />
              <span>Profile</span>
            </button>

            {/* Toggle Theme */}
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left text-[13px] transition-colors hover:bg-[#303030] hover:text-white"
            >
              {theme === "dark" ? (
                <>
                  <Sun size={17} className="text-gray-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={17} className="text-gray-400" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left text-[13px] transition-colors hover:bg-[#3a3a3a] hover:text-white text-red-400"
            >
              <LogOut size={18} strokeWidth={1.7} />
              <span>Log out</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;