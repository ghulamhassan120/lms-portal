"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Clock,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import Sidebar from "@/components/SideBar/Sidebar";
import { useSidebar } from "@/context/context";
import Header from "@/components/Header/Header";
import { containerVariants, itemVariants } from "@/components/animation/motion";
import { progressTopics } from "@/config/assest";


export default function ProgressPage() {
  const [openModuleId, setOpenModuleId] = useState<number | null>(null);
  const { collapsed,theme } = useSidebar();
  const isLight=theme==="dark"

  const toggleModule = (id: number) => {
    setOpenModuleId(openModuleId === id ? null : id);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#111111] text-white">
      <div className="flex min-h-screen">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT WITH PROPER MARGIN */}
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`
            min-w-0
            flex-1
            transition-all
            duration-300
            p-4
            sm:p-6
            ml-0
            ${collapsed ? "lg:ml-[78px]" : "lg:ml-[196px]"}
          `}
        >
          <Header />
          {/* ================= TOP STATS CARDS ================= */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
          >
            {/* Total Topics */}
            <div className={`flex items-center justify-between rounded-xl border border-[#343434] ${isLight?"bg-[#232323]":"bg-[#fff]"}  p-5`}>
              <div>
                <span className="text-[27px] font-semibold text-[#e5e7eb]">
                  81
                </span>
                <p className="mt-1 text-sm text-gray-400">Total Topics</p>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-full  ${isLight?"bg-[#18302d]":"bg-[#D1FAE5]"}`}>
                <BookOpen size={20} className="text-[#00c98b]" />
              </div>
            </div>

            {/* Completed Topics */}
            <div className={`flex items-center justify-between rounded-xl border border-[#343434] ${isLight?"bg-[#232323]":"bg-[#fff]"} p-5`}>
              <div>
                <span className="text-[27px] font-semibold text-[#e5e7eb]">
                  57
                </span>
                <p className="mt-1 text-sm text-gray-400">Completed Topics</p>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-full b ${isLight?"bg-[#2b2638]":"bg-[#EFE5FF]"}`}>
                <GraduationCap size={22} className="text-[#934cff]" />
              </div>
            </div>

            {/* Pending Topics */}
            <div className={`flex items-center justify-between rounded-xl border border-[#343434] ${isLight?"bg-[#232323] ":"bg-[#fff]"} p-5`}>
              <div>
                <span className="text-[27px] font-semibold text-[#e5e7eb]">
                  24
                </span>
                <p className="mt-1 text-sm text-gray-400">Pending Topics</p>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-full  ${isLight?"bg-[#381e1e]":"bg-[#F6D0CF]"}`}>
                <Clock size={20} className="text-[#ef4444]" />
              </div>
            </div>
          </motion.div>

          {/* ================= COURSE LIST SECTION WITH ACCORDION ================= */}
          <motion.div variants={itemVariants} className="space-y-4">
            {progressTopics.map((item) => {
              const isOpen = openModuleId === item.id;
              const StatusIcon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border border-[#343434] ${isLight?"bg-[#232323]":"bg-[#fff]"} overflow-hidden transition-all`}
                >
                  {/* Module Header Bar */}
                  <div
                    onClick={() => toggleModule(item.id)}
                    className={`flex items-center justify-between px-5 py-4 cursor-pointer  ${isLight?"hover:bg-[#2a2a2a]":"hover:bg-[#ffffff]"} transition-all`}
                  >
                    {/* Left Side: Icon & Title */}
                    <div className="flex items-center gap-4">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2a2a2a] ${isLight?"bg-[#2a2a2a]":"bg-[#ececec]"}`}>
                        <StatusIcon size={18} className={`${item.iconColor}` } />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">
                          Topics: {item.topics}
                        </p>
                      </div>
                    </div>

                    {/* Right Side: Percentage & Dropdown Arrow */}
                    <div className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full  text-xs font-bold ${isLight?"text-[#009ce9] border-2 border-[#009ce9]":"text-[#009ce9] border-2 border-[#009ce9]!"}`}>
                        {item.percentage}
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={18} className="text-gray-400" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expandable Submenu Content */}
                  <AnimatePresence>
                    {isOpen && item.topicsList && item.topicsList.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="border-t border-[#343434] bg-[#1a1a1a] p-5 space-y-4"
                      >
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Topics in {item.title}:
                        </h4>

                        {item.topicsList.map((topic, idx) => (
                          <div
                            key={idx}
                            className={`rounded-xl border border-[#343434] ${isLight?"bg-[#232323] ":"bg-[#fff] "} p-4`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <CheckCircle2 size={16} className="text-[#00c98b]" />
                              <span className="text-sm font-semibold text-white underline">
                                {topic.title}
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 mb-3 ml-6">
                              {topic.completedDate}
                            </p>

                            {/* Sub items nested box */}
                            {topic.subItems && topic.subItems.length > 0 && (
                              <div className={`ml-6 rounded-lg  ${isLight?"bg-[#162235]":"bg-[#EFF6FF]"} border border-[#343434] p-3 space-y-2`}>
                                {topic.subItems.map((sub, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="flex items-center gap-2 text-xs text-[#38bdf8]"
                                  >
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                                    <span>{sub}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}