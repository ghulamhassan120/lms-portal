'use client';
import React, { useContext, useState } from "react";
import { motion, AnimatePresence, Variant, Variants } from "framer-motion";
import { Calendar, CheckCircle2, XCircle, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import Sidebar from "@/components/SideBar/Sidebar";
import { ContextType, SidebarContext, useSidebar } from "@/context/context";
import Header from "@/components/Header/Header";

// Animation Variants
const containerVariants :Variants= {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants:Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut"as const }
  },
};

const months = [
  "Jan 2026", "Feb 2026", "Mar 2026", "Apr 2026", 
  "May 2026", "Jun 2026", "Jul 2026", "Aug 2026", "Sep 2026"
];

const attendanceRecords = [
  { classNo: 1, date: "Tue, Sep 1, 2026", status: "ABSENT" },
  { classNo: 2, date: "Thu, Sep 3, 2026", status: "PRESENT" },
  { classNo: 3, date: "Sun, Sep 6, 2026", status: "ABSENT" },
  { classNo: 4, date: "Tue, Sep 8, 2026", status: "PRESENT" },
  { classNo: 5, date: "Thu, Sep 10, 2026", status: "ABSENT" },
];

export default function AttendancePage() {
  const { collapsed } = useSidebar()
  const [selectedMonth, setSelectedMonth] = useState("Sep 2026");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#111111] text-white">
      <div className="flex min-h-screen">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
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
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6"
          >
            {/* Total Classes */}
            <div className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">129</div>
                <p className="mt-1 text-sm text-gray-400">Total Classes</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a2a2a] text-gray-300">
                <Calendar size={20} />
              </div>
            </div>

            {/* Present */}
            <div className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">63</div>
                <p className="mt-1 text-sm text-gray-400">Present</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18302d]">
                <CheckCircle2 size={20} className="text-[#00c98b]" />
              </div>
            </div>

            {/* Leave */}
            <div className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">0</div>
                <p className="mt-1 text-sm text-gray-400">Leave</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#383018]">
                <AlertCircle size={20} className="text-[#f59e0b]" />
              </div>
            </div>

            {/* Absent */}
            <div className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">66</div>
                <p className="mt-1 text-sm text-gray-400">Absent</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#381e1e]">
                <XCircle size={20} className="text-[#ef4444]" />
              </div>
            </div>
          </motion.div>

          {/* ================= ATTENDANCE OVERVIEW SECTION ================= */}
          <motion.div 
            variants={itemVariants}
            className="rounded-xl border border-[#343434] bg-[#232323] p-5 mb-6"
          >
            <h2 className="text-base font-semibold text-white mb-2">Attendance Overview</h2>
            <p className="text-sm text-gray-400 mb-4">Your attendance is below 75%. Please improve.</p>
            
            <div className="flex items-center justify-between mb-2">
              <div className="w-full bg-[#353535] h-2 rounded-full overflow-hidden mr-4">
                <div className="bg-[#ef4444] h-full w-[49%]" />
              </div>
              <span className="text-lg font-bold text-[#ef4444]">49%</span>
            </div>
          </motion.div>

          {/* ================= ATTENDANCE TABLE SECTION ================= */}
          <motion.div variants={itemVariants} className="rounded-xl border border-[#343434] bg-[#232323] p-5">
            {/* Dropdown Header */}
            <div className="flex justify-end mb-4 relative">
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between gap-3 rounded-lg border border-[#3c3c3c] bg-[#2a2a2a] px-4 py-2 text-sm text-white w-[140px]"
                >
                  <span>{selectedMonth}</span>
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-[140px] rounded-lg border border-[#3c3c3c] bg-[#222222] shadow-xl z-20 overflow-hidden"
                    >
                      {months.map((m) => (
                        <div
                          key={m}
                          onClick={() => {
                            setSelectedMonth(m);
                            setIsOpen(false);
                          }}
                          className={`px-4 py-2 text-sm cursor-pointer transition hover:bg-[#303030] ${
                            selectedMonth === m ? "text-[#00c98b] font-medium" : "text-gray-300"
                          }`}
                        >
                          {m}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-300">
                <thead className="border-b border-[#343434] text-xs text-gray-400 uppercase">
                  <tr>
                    <th className="py-3 px-4">Class</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#343434]">
                  {attendanceRecords.map((record) => (
                    <tr key={record.classNo} className="hover:bg-[#282828] transition">
                      <td className="py-4 px-4 font-medium text-white">{record.classNo}</td>
                      <td className="py-4 px-4 text-gray-300">{record.date}</td>
                      <td className="py-4 px-4 text-right">
                        <span
                          className={`inline-block px-3 py-1 rounded text-xs font-semibold ${
                            record.status === "PRESENT"
                              ? "bg-[#18302d] text-[#00c98b] border border-[#00c98b]/30"
                              : "bg-[#381e1e] text-[#ef4444] border border-[#ef4444]/30"
                          }`}
                        >
                          {record.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}