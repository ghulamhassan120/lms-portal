'use client';
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ExternalLink } from "lucide-react";
import Sidebar from "@/components/SideBar/Sidebar";
import { ContextType, SidebarContext } from "@/context/context";

// Animation Variants for Out-class Smooth Effect
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

const feeRecords = [
  { month: "Feb 2026", amount: "Rs: 1000 /-+", type: "Monthly", dueDate: "19-Feb-2026", voucherId: "202602525239", status: "PENDING" },
  { month: "Nov 2025", amount: "Rs: 1000 /-+", type: "Monthly", dueDate: "08-Nov-2025", voucherId: "202511525239", status: "PENDING" },
];
export default function PaymentPage() {
  const { collapsed } = useContext<ContextType>(SidebarContext);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
          {/* ================= PAYMENT INSTRUCTIONS BANNER ================= */}
          <motion.div 
            variants={itemVariants}
            className="relative rounded-2xl border border-[#343434] bg-[#162235] p-6 md:p-8 mb-6 overflow-hidden shadow-lg"
          >
            <div className="max-w-3xl">
              <h2 className="text-[#38bdf8] font-semibold text-base mb-3">
                To pay your fee via JazzCash:
              </h2>
              
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                <li><span className="text-white font-medium">Open</span> JazzCash app</li>
                <li>Click on <span className="text-[#38bdf8] font-semibold">More</span></li>
                <li>Go to <span className="text-white font-medium">Education</span> tab</li>
                <li>Click <span className="text-white font-medium">Universities</span></li>
                <li>Select <span className="text-white font-medium">Saylani Education</span> from the list</li>
                <li>Paste your <span className="text-white font-medium">Voucher ID</span></li>
                <li>Pay your fee</li>
              </ol>
            </div>
          </motion.div>

          {/* ================= GENERATE VOUCHER BUTTON ================= */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-end mb-6"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-xl bg-[#0085ff] hover:bg-[#006edb] px-5 py-3 text-sm font-semibold text-white shadow-md transition"
            >
              Generate current month voucher
            </motion.button>
          </motion.div>

          {/* ================= FEE TABLE SECTION ================= */}
          <motion.div 
            variants={itemVariants}
            className="rounded-xl border border-[#343434] bg-[#232323] p-5"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-300 min-w-[700px]">
                <thead className="border-b border-[#343434] text-xs text-gray-400 uppercase">
                  <tr>
                    <th className="py-3 px-4">Month</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4">Due date</th>
                    <th className="py-3 px-4">Voucher ID</th>
                    <th className="py-3 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#343434]">
                  {feeRecords.map((record, index) => (
                    <motion.tr 
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                      key={index} 
                      className="transition"
                    >
                      <td className="py-4 px-4 font-medium text-white">{record.month}</td>
                      <td className="py-4 px-4 text-gray-300">{record.amount}</td>
                      <td className="py-4 px-4 text-gray-300">{record.type}</td>
                      <td className="py-4 px-4 text-gray-300">{record.dueDate}</td>
                      <td className="py-4 px-4 font-mono text-gray-300 flex items-center gap-2">
                        {record.voucherId}
                        <button 
                          onClick={() => handleCopy(record.voucherId)}
                          className="p-1.5 rounded-md bg-[#2d2d2d] hover:bg-[#383838] text-gray-400 hover:text-white transition"
                          title="Copy Voucher ID"
                        >
                          {copiedId === record.voucherId ? <Check size={14} className="text-[#00c98b]" /> : <Copy size={14} />}
                        </button>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-[#3d2c18] text-[#f59e0b] border border-[#f59e0b]/30">
                          {record.status}
                        </span>
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