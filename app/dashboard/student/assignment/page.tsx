'use client';
import React, { useContext } from "react";
import { motion, Variants } from "framer-motion";
import { FileText, CheckSquare, Clock, Eye, Upload, Edit3 } from "lucide-react";
import Sidebar from "@/components/SideBar/Sidebar";
import { ContextType, SidebarContext } from "@/context/context";

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
    transition: { duration: 0.4, ease: "easeOut" as const}
  },
};

const assignmentRecords = [
  {
    title: "Admin panel (E commerce Dashboard)",
    topics: "7 Topics",
    dueDate: "September 10, 2026",
    status: "APPROVED",
    statusType: "approved",
    isHackathon: false,
    actionState: "active"
  },
  {
    title: "QUICKSERVE WMA (Batch-20)",
    topics: "No topics",
    dueDate: "August 29, 2026",
    status: "NOT SUBMITTED",
    statusType: "not-submitted",
    isHackathon: true,
    actionState: "closed"
  },
  {
    title: "E-Commerce Website (React js)",
    topics: "4 Topics",
    dueDate: "August 17, 2026",
    status: "APPROVED",
    statusType: "approved",
    isHackathon: false,
    actionState: "active"
  },
  {
    title: "Furniture E-Commerce Website",
    topics: "5 Topics",
    dueDate: "August 10, 2026",
    status: "SUBMITTED",
    statusType: "submitted",
    isHackathon: false,
    actionState: "active"
  },
  {
    title: "MaintainIQ (Batch-20)",
    topics: "No topics",
    dueDate: "July 11, 2026",
    status: "NOT SUBMITTED",
    statusType: "not-submitted",
    isHackathon: true,
    actionState: "closed"
  },
];

export default function AssignmentPage() {
  const { collapsed } = useContext<ContextType>(SidebarContext);

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
          {/* ================= TOP STATS CARDS ================= */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
          >
            {/* Assigned */}
            <div className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">16</div>
                <p className="mt-1 text-sm text-gray-400">Assigned</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1b253b]">
                <FileText size={20} className="text-[#38bdf8]" />
              </div>
            </div>

            {/* Submitted */}
            <div className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">6</div>
                <p className="mt-1 text-sm text-gray-400">Submitted</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18302d]">
                <CheckSquare size={20} className="text-[#00c98b]" />
              </div>
            </div>

            {/* Pending */}
            <div className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">10</div>
                <p className="mt-1 text-sm text-gray-400">Pending</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#383018]">
                <Clock size={20} className="text-[#f59e0b]" />
              </div>
            </div>
          </motion.div>

          {/* ================= ASSIGNMENT TABLE SECTION ================= */}
          <motion.div 
            variants={itemVariants}
            className="rounded-xl border border-[#343434] bg-[#232323] p-4 sm:p-5 shadow-lg"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-300 min-w-[800px]">
                <thead className="border-b border-[#343434] text-xs text-gray-400 uppercase">
                  <tr>
                    <th className="py-3 px-4">Assignment</th>
                    <th className="py-3 px-4">Topics</th>
                    <th className="py-3 px-4">Due Date</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#343434]">
                  {assignmentRecords.map((record, index) => (
                    <motion.tr 
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                      key={index} 
                      className={`transition ${record.isHackathon ? "bg-[#1c1525]" : ""}`}
                    >
                      {/* Assignment Title & Hackathon Badge */}
                      <td className="py-4 px-4 font-medium text-white">
                        <div className="flex items-center gap-3">
                          <span>{record.title}</span>
                          {record.isHackathon && (
                            <span className="rounded-md border border-[#934cff]/40 bg-[#2b223d] px-2 py-0.5 text-[10px] font-semibold tracking-wider text-[#b072ff]">
                              HACKATHON
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Topics */}
                      <td className="py-4 px-4">
                        <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium ${
                          record.topics === "No topics" 
                            ? "text-gray-400" 
                            : "bg-[#162938] text-[#38bdf8] border border-[#38bdf8]/30"
                        }`}>
                          {record.topics}
                        </span>
                      </td>

                      {/* Due Date */}
                      <td className="py-4 px-4 text-gray-300">{record.dueDate}</td>

                      {/* Status */}
                      <td className="py-4 px-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-md text-xs font-semibold ${
                            record.statusType === "approved"
                              ? "bg-[#18302d] text-[#00c98b] border border-[#00c98b]/30"
                              : record.statusType === "submitted"
                              ? "bg-[#162938] text-[#38bdf8] border border-[#38bdf8]/30"
                              : "bg-[#252525] text-gray-400 border border-[#3d3d3d]"
                          }`}
                        >
                          {record.status}
                        </span>
                      </td>

                      {/* Action */}
                      <td className="py-4 px-4 text-right">
                        {record.actionState === "closed" ? (
                          <div className="flex items-center justify-end gap-3 text-xs italic text-[#ef4444]">
                            <button title="View" className="text-gray-400 hover:text-white transition not-italic">
                              <Eye size={17} />
                            </button>
                            <span>Submissions closed</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-end gap-3 text-gray-400">
                            <button title="View" className="hover:text-white transition">
                              <Eye size={17} />
                            </button>
                            <button title="Upload" className="hover:text-white transition">
                              <Upload size={17} />
                            </button>
                            <button title="Edit" className="hover:text-white transition">
                              <Edit3 size={17} />
                            </button>
                          </div>
                        )}
                      </td>
                    </motion.tr>
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