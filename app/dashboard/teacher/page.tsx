'use client';
import React, { useContext, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Users, 
  Calendar, 
  FileText, 
  Award, 
  TrendingUp, 
  Search, 
  Plus, 
  Eye, 
  Edit3, 
  MessageSquare, 
  ChevronRight, 
  Menu, 
  CheckCircle2,
  Clock,
  ChevronDown
} from "lucide-react";
import Sidebar from "@/components/SideBar/Sidebar";
import { ContextType, SidebarContext, useSidebar } from "@/context/context";
import TeacherSidebar from "@/components/SideBar/TeacherSidebar";
import { assignments, modules, quizzes, students } from "@/config/assest";
import { containerVariants, itemVariants } from "@/components/animation/motion";
import Breadcrumb_teacher from "@/components/BREADCRUMBS/Breadcrumb_teacher";


export default function TeacherCoursePage() {
  const { collapsed, setMobileMenu, mobileMenu,activeTab,setActiveTab } = useSidebar()
  const [searchQuery, setSearchQuery] = useState("");

  
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#111111] text-white">
      <div className="flex min-h-screen">
        {/* MOBILE OVERLAY */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] lg:hidden"
            />
          )}
        </AnimatePresence>

        {/* SIDEBAR */}
        <TeacherSidebar />

        {/* MAIN CONTENT */}
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`
            min-w-0 flex-1 transition-all duration-300 p-3 sm:p-5 lg:p-6
            ml-0 ${collapsed ? "lg:ml-[78px]" : "lg:ml-[196px]"}
          `}
        >
          {/* HEADER & BREADCRUMBS */}
            <Breadcrumb_teacher/>

          {/* NAVIGATION TABS (Students, Attendance, Assignments, Quizzes, Course Progress) */}
          <motion.div variants={itemVariants} className="flex overflow-x-auto border-b border-[#343434] mb-6 gap-6 scrollbar-none">
            {[
              { name: "Students", icon: Users },
              { name: "Attendance", icon: Calendar },
              { name: "Assignments", icon: FileText },
              { name: "Quizzes", icon: Award },
              { name: "Course Progress", icon: TrendingUp },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 pb-3 text-sm font-medium transition border-b-2 shrink-0 ${
                    isActive 
                      ? "border-[#0085ff] text-[#0085ff]" 
                      : "border-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </motion.div>

          {/* TAB CONTENT CONTAINER */}
          <AnimatePresence mode="wait">
            {/* ================= STUDENTS TAB ================= */}
            {activeTab === "Students" && (
              <motion.div key="students" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                {/* Search & Filter Bar[cite: 6] */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#232323] p-4 rounded-xl border border-[#343434]">
                  <div className="relative w-full sm:w-[320px]">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search by name, email or roll no..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#1b1b1b] border border-[#3a3a3a] rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0085ff]"
                    />
                  </div>
                  <select className="w-full sm:w-auto bg-[#1b1b1b] border border-[#3a3a3a] rounded-lg px-4 py-2 text-sm text-white focus:outline-none">
                    <option>All</option>
                    <option>Enrolled</option>
                  </select>
                </div>

                {/* Students Table[cite: 6] */}
                <div className="rounded-xl border border-[#343434] bg-[#232323] p-4 sm:p-5 shadow-lg overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-300 min-w-[600px]">
                    <thead className="border-b border-[#343434] text-xs text-gray-400 uppercase">
                      <tr>
                        <th className="py-3 px-4">Name</th>
                        <th className="py-3 px-4">Roll Number</th>
                        <th className="py-3 px-4">Email</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#343434]">
                      {students.map((stu, i) => (
                        <tr key={i} className="hover:bg-[#2a2a2a] transition">
                          <td className="py-4 px-4 font-medium text-white">{stu.name}</td>
                          <td className="py-4 px-4 font-mono text-gray-400">{stu.roll}</td>
                          <td className="py-4 px-4 text-gray-300">{stu.email}</td>
                          <td className="py-4 px-4">
                            <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#162938] text-[#38bdf8] border border-[#38bdf8]/30">
                              {stu.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <button title="View Profile" className="p-1.5 rounded bg-[#2d2d2d] hover:bg-[#383838] text-gray-300 transition">
                              <Eye size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* ================= ASSIGNMENTS TAB ================= */}
            {activeTab === "Assignments" && (
              <motion.div key="assignments" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="rounded-xl border border-[#343434] bg-[#232323] p-4 sm:p-5 shadow-lg overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-300 min-w-[800px]">
                    <thead className="border-b border-[#343434] text-xs text-gray-400 uppercase">
                      <tr>
                        <th className="py-3 px-4">Title</th>
                        <th className="py-3 px-4">Description</th>
                        <th className="py-3 px-4">Topics</th>
                        <th className="py-3 px-4">Due Date</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#343434]">
                      {assignments.map((asm, i) => (
                        <tr key={i} className={`transition ${asm.isHackathon ? "bg-[#1c1525]" : "hover:bg-[#2a2a2a]"}`}>
                          <td className="py-4 px-4 font-medium text-white">
                            <div className="flex flex-col gap-1">
                              <span>{asm.title}</span>
                              {asm.isHackathon && (
                                <span className="w-fit rounded border border-[#934cff]/40 bg-[#2b223d] px-2 py-0.5 text-[10px] font-semibold text-[#b072ff]">
                                  HACKATHON
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-400 text-xs max-w-[250px] truncate">{asm.desc}</td>
                          <td className="py-4 px-4">
                            <span className="inline-block px-2 py-1 rounded bg-[#162938] text-[#38bdf8] text-xs font-medium border border-[#38bdf8]/30">
                              {asm.topics}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-gray-300">{asm.dueDate}</td>
                          <td className="py-4 px-4 text-right">
                            <div className="flex items-center justify-end gap-2 text-gray-400">
                              <button title="View" className="hover:text-white transition"><Eye size={17} /></button>
                              <button title="Edit" className="hover:text-white transition"><Edit3 size={17} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* ================= QUIZZES TAB ================= */}
            {activeTab === "Quizzes" && (
              <motion.div key="quizzes" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="rounded-xl border border-[#343434] bg-[#232323] p-4 sm:p-5 shadow-lg overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-300 min-w-[750px]">
                    <thead className="border-b border-[#343434] text-xs text-gray-400 uppercase">
                      <tr>
                        <th className="py-3 px-4">Quiz</th>
                        <th className="py-3 px-4">Course(s)</th>
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4">Expiry</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#343434]">
                      {quizzes.map((qz, i) => (
                        <tr key={i} className="hover:bg-[#2a2a2a] transition">
                          <td className="py-4 px-4 font-medium text-white">{qz.title}</td>
                          <td className="py-4 px-4 text-gray-400 text-xs max-w-[220px] truncate">{qz.course}</td>
                          <td className="py-4 px-4 text-gray-300">{qz.date}</td>
                          <td className="py-4 px-4 text-gray-300">{qz.expiry}</td>
                          <td className="py-4 px-4">
                            <span className="inline-block px-2.5 py-1 rounded text-xs font-semibold bg-[#18302d] text-[#00c98b] border border-[#00c98b]/30">
                              {qz.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <button title="View Results" className="p-1.5 rounded bg-[#2d2d2d] hover:bg-[#383838] text-gray-300 transition">
                              <Eye size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* ================= COURSE PROGRESS TAB ================= */}
            {activeTab === "Course Progress" && (
              <div className="rounded-xl border border-[#343434] bg-[#232323] p-5 text-white shadow-lg">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <span className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">Compare Progress</span>
          <h2 className="text-base font-bold text-white">Course Progress Overview</h2>
        </div>
        <button className="w-fit rounded-lg border border-[#3a3a3a] bg-[#1b1b1b] px-4 py-1.5 text-xs font-medium text-gray-300 hover:text-white transition">
          Only My Progress
        </button>
      </div>

      {/* Student Progress Card */}
      <div className="rounded-xl border border-[#343434] bg-[#1b1b1b] p-4 sm:p-5 mb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div>
            <span className="text-xs font-semibold text-gray-400 uppercase">My Progress</span>
            <div className="flex items-center gap-2 mt-0.5">
              <h3 className="text-sm sm:text-base font-bold text-white">S Muzammil Javed</h3>
              <span className="text-gray-400">-</span>
              <span className="text-sm text-gray-300">Zaitoon Ashraf IT Park</span>
              <span className="rounded bg-[#2a2a2a] px-2 py-0.5 text-[10px] font-medium text-gray-300">Batch 20</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Mon 01:00 PM - 03:00 PM | Wed 01:00 PM - 03:00 PM | Fri 01:00 PM - 03:00 PM</p>
          </div>
          <div className="rounded-lg bg-[#162938] border border-[#38bdf8]/30 px-3 py-1 text-xs font-semibold text-[#38bdf8] w-fit">
            Topics: 56/81
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-gray-400">Overall progress</span>
            <span className="font-bold text-[#38bdf8]">69%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-[#2a2a2a] overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "69%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-[#0085ff]" 
            />
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-3">
        {modules.map((mod, index) => (
          <div key={index} className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#1b1b1b] p-4 transition hover:bg-[#222222]">
            <div className="flex items-center gap-3">
              {mod.completed ? (
                <CheckCircle2 size={20} className="text-[#00c98b] shrink-0" />
              ) : (
                <Clock size={20} className="text-[#f59e0b] shrink-0" />
              )}
              <div>
                <h4 className="text-sm font-semibold text-white">{mod.name}</h4>
                <p className="text-xs text-gray-400">Topics: {mod.topics}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-[#38bdf8] text-xs font-bold text-[#38bdf8]">
                {mod.percentage}%
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
            )}

            {/* ================= ATTENDANCE TAB ================= */}
            {activeTab === "Attendance" && (
              <motion.div key="attendance" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="rounded-xl border border-[#343434] bg-[#232323] p-6 text-center text-gray-400">
                  Attendance logs and session marking tool for trainers will appear here.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.main>
      </div>
    </div>
  );
}