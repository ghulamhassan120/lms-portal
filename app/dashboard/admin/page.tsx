'use client';
import React, { useContext, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  CreditCard, 
  ShieldCheck, 
  Menu, 
  ChevronRight, 
  CheckCircle, 
  XCircle, 
  Search, 
  Plus 
} from "lucide-react";
import Sidebar from "@/components/SideBar/Sidebar";
import { ContextType, SidebarContext, useSidebar } from "@/context/context";
import AdminSidebar from "@/components/SideBar/AdminSidebar";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const }
  },
};

const pendingVouchers = [
  { id: 1, student: "Ghulam Hassan", roll: "525239", month: "Feb 2026", amount: "Rs: 1000", voucherId: "202602525239" },
  { id: 2, student: "Ali Khan", roll: "525240", month: "Feb 2026", amount: "Rs: 1000", voucherId: "202602525240" },
];

export default function AdminDashboard() {
  const { collapsed, setMobileMenu, mobileMenu } = useSidebar()
  const [activeTab, setActiveTab] = useState("Vouchers");

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
        <AdminSidebar />

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
          {/* HEADER */}
          <motion.header variants={itemVariants} className="flex items-center justify-between gap-4 border-b border-[#222222] pb-4 mb-5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenu(true)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#363636] bg-[#222222] text-gray-300 hover:text-white lg:hidden"
              >
                <Menu size={20} />
              </button>
              <div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-1">
                  <span>Portal</span>
                  <ChevronRight size={14} />
                  <span className="text-[#9ca3af]">Admin Control Center</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-white">Admin Dashboard</h1>
              </div>
            </div>

            <button className="flex items-center gap-2 rounded-md bg-[#0085ff] hover:bg-[#006edb] px-3.5 py-2 text-sm font-semibold text-white transition shadow">
              <Plus size={16} />
              <span>Add User / Course</span>
            </button>
          </motion.header>

          {/* STATS CARDS */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <motion.div variants={itemVariants} className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">1,240</div>
                <p className="mt-1 text-sm text-gray-400">Total Students</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1b253b]">
                <Users size={20} className="text-[#38bdf8]" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">48</div>
                <p className="mt-1 text-sm text-gray-400">Total Teachers</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18302d]">
                <GraduationCap size={20} className="text-[#00c98b]" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">12</div>
                <p className="mt-1 text-sm text-gray-400">Active Courses</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b2638]">
                <BookOpen size={20} className="text-[#934cff]" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">08</div>
                <p className="mt-1 text-sm text-gray-400">Pending Vouchers</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#383018]">
                <CreditCard size={20} className="text-[#f59e0b]" />
              </div>
            </motion.div>
          </motion.div>

          {/* PENDING VOUCHERS APPROVAL TABLE */}
          <motion.div variants={itemVariants} className="rounded-xl border border-[#343434] bg-[#232323] p-4 sm:p-5 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-white">Fee Voucher Approvals</h2>
              <span className="text-xs text-gray-400">Verify student fee payments</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-300 min-w-[700px]">
                <thead className="border-b border-[#343434] text-xs text-gray-400 uppercase">
                  <tr>
                    <th className="py-3 px-4">Student Name</th>
                    <th className="py-3 px-4">Roll No</th>
                    <th className="py-3 px-4">Month</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Voucher ID</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#343434]">
                  {pendingVouchers.map((v) => (
                    <tr key={v.id} className="hover:bg-[#2a2a2a] transition">
                      <td className="py-4 px-4 font-medium text-white">{v.student}</td>
                      <td className="py-4 px-4 text-gray-400 font-mono">{v.roll}</td>
                      <td className="py-4 px-4 text-gray-300">{v.month}</td>
                      <td className="py-4 px-4 text-gray-300">{v.amount}</td>
                      <td className="py-4 px-4 font-mono text-[#38bdf8]">{v.voucherId}</td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button title="Approve" className="p-1.5 rounded bg-[#18302d] hover:bg-[#20403b] text-[#00c98b] transition">
                            <CheckCircle size={16} />
                          </button>
                          <button title="Reject" className="p-1.5 rounded bg-[#381e1e] hover:bg-[#4a2424] text-[#ef4444] transition">
                            <XCircle size={16} />
                          </button>
                        </div>
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