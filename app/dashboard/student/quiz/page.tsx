'use client';
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import Sidebar from "@/components/SideBar/Sidebar";
import { ContextType, SidebarContext, useSidebar } from "@/context/context";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
};

const quizRecords = [
  {
    title: "Javascript (Quiz-4)",
    module: "Modern Front-End Development",
    questions: "40",
    attempts: "1 / 3",
    percentage: "70%",
    status: "PASSED",
    note: "—",
    action: "Completed"
  },
  {
    title: "Javascript (Quiz-3)",
    module: "Modern Front-End Development",
    questions: "40",
    attempts: "3 / 3",
    percentage: "73%",
    status: "PASSED",
    note: "—",
    action: "Completed"
  },
  {
    title: "Javascript (Quiz-2)",
    module: "Modern Front-End Development",
    questions: "40",
    attempts: "1 / 3",
    percentage: "90%",
    status: "PASSED",
    note: "—",
    action: "Completed"
  },
  {
    title: "Javascript (Quiz-1)",
    module: "Modern Front-End Development",
    questions: "40",
    attempts: "1 / 3",
    percentage: "88%",
    status: "PASSED",
    note: "—",
    action: "Completed"
  },
];

export default function QuizPage() {
  const { collapsed } = useSidebar()

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
          {/* ================= IMPORTANT INFORMATION BANNER ================= */}
          <motion.div 
            variants={itemVariants}
            className="rounded-2xl border border-[#343434] bg-[#162235] p-5 sm:p-6 mb-6 shadow-xl"
          >
            <div className="flex items-center gap-2.5 text-[#38bdf8] font-semibold text-base mb-3">
              <AlertTriangle size={20} />
              <h2>Important Information</h2>
            </div>
            
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-300">
              <li>Once started, quizzes must be completed in one session</li>
              <li>Switching tabs or leaving the window will be recorded</li>
              <li>Ensure you have a stable internet connection</li>
              <li>The quiz will open in fullscreen mode</li>
            </ul>
          </motion.div>

          {/* ================= QUIZ TABLE SECTION ================= */}
          <motion.div 
            variants={itemVariants}
            className="rounded-xl border border-[#343434] bg-[#232323] p-4 sm:p-5 shadow-lg mb-6"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-300 min-w-[900px]">
                <thead className="border-b border-[#343434] text-xs text-gray-400 uppercase">
                  <tr>
                    <th className="py-3 px-4">Title</th>
                    <th className="py-3 px-4">Module</th>
                    <th className="py-3 px-4">Questions</th>
                    <th className="py-3 px-4">Attempts</th>
                    <th className="py-3 px-4">Percentage</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Note</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#343434]">
                  {quizRecords.map((record, index) => (
                    <motion.tr 
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                      key={index} 
                      className="transition"
                    >
                      <td className="py-4 px-4 font-medium text-white">{record.title}</td>
                      <td className="py-4 px-4 text-gray-300">{record.module}</td>
                      <td className="py-4 px-4">
                        <span className="inline-block rounded-md bg-[#2b2b2b] px-2.5 py-1 text-xs font-semibold text-gray-200">
                          {record.questions}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-block rounded-md px-2.5 py-1 text-xs font-semibold ${
                          record.attempts === "3 / 3" 
                            ? "bg-[#381e1e] text-[#ef4444] border border-[#ef4444]/30" 
                            : "bg-[#2b2b2b] text-gray-200"
                        }`}>
                          {record.attempts}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-medium text-white">{record.percentage}</td>
                      <td className="py-4 px-4">
                        <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-[#18302d] text-[#00c98b] border border-[#00c98b]/30">
                          {record.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-400">{record.note}</td>
                      <td className="py-4 px-4 text-right">
                        <button 
                          disabled 
                          className="rounded-lg border border-[#3c3c3c] bg-[#2a2a2a] px-4 py-1.5 text-xs font-medium text-gray-400 cursor-not-allowed"
                        >
                          {record.action}
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* ================= FOOTER NOTE ================= */}
          <motion.div 
            variants={itemVariants}
            className="text-center text-xs sm:text-sm text-gray-500 py-2"
          >
            Contact your instructor if you have any issues accessing your quizzes.
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}