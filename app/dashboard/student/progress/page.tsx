'use client';
import React, { useContext } from "react";
import { motion, Variants } from "framer-motion";
import { BookOpen, GraduationCap, Clock, CheckCircle2, ChevronDown } from "lucide-react";
import Sidebar from "@/components/SideBar/Sidebar";
import { ContextType, SidebarContext, useSidebar } from "@/context/context";
import Header from "@/components/Header/Header";

// Animation Variants
const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants :Variants= {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
  },
};

const progressTopics = [
  { title: "Web Designing", topics: "20/20", percentage: "100%", status: "completed", icon: CheckCircle2, iconColor: "text-[#00c98b]" },
  { title: "Front-End Development", topics: "27/31", percentage: "87%", status: "pending", icon: Clock, iconColor: "text-[#f59e0b]" },
  { title: "Modern Front-End Development", topics: "10/14", percentage: "71%", status: "pending", icon: Clock, iconColor: "text-[#f59e0b]" },
  { title: "Back-End Development", topics: "0/16", percentage: "0", status: "pending", icon: Clock, iconColor: "text-[#f59e0b]" },
];

export default function ProgressPage() {
    const { collapsed } = useSidebar()
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
            <Header/>
          {/* ================= TOP STATS CARDS ================= */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
          >
            {/* Total Topics */}
            <div className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">81</div>
                <p className="mt-1 text-sm text-gray-400">Total Topics</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18302d]">
                <BookOpen size={20} className="text-[#00c98b]" />
              </div>
            </div>

            {/* Completed Topics */}
            <div className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">57</div>
                <p className="mt-1 text-sm text-gray-400">Completed Topics</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b2638]">
                <GraduationCap size={22} className="text-[#934cff]" />
              </div>
            </div>

            {/* Pending Topics */}
            <div className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">24</div>
                <p className="mt-1 text-sm text-gray-400">Pending Topics</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#381e1e]">
                <Clock size={20} className="text-[#ef4444]" />
              </div>
            </div>
          </motion.div>

          {/* ================= COURSE LIST SECTION ================= */}
          <motion.div variants={itemVariants} className="space-y-4">
            {progressTopics.map((item, index) => {
              const StatusIcon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.005 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] px-5 py-4 transition-all"
                >
                  {/* Left Side: Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2a2a2a]`}>
                      <StatusIcon size={18} className={item.iconColor} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">Topics: {item.topics}</p>
                    </div>
                  </div>

                  {/* Right Side: Percentage & Dropdown Arrow */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#009ce9] text-xs font-bold text-[#009ce9]">
                      {item.percentage}
                    </div>
                    <ChevronDown size={18} className="text-gray-400" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}