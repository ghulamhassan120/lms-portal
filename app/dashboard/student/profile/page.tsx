'use client';
import React, { useContext } from "react";
import { motion, Variants } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  Calendar, 
  BookOpen, 
  Edit3, 
  LogOut, 
  Menu, 
  ChevronRight 
} from "lucide-react";
import Sidebar from "@/components/SideBar/Sidebar";
import { ContextType, SidebarContext, useSidebar } from "@/context/context";

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

export default function ProfilePage() {
  const { collapsed, setMobileMenu, mobileMenu } = useSidebar()

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#111111] text-white">
      <div className="flex min-h-screen">
        {/* MOBILE OVERLAY */}
        {mobileMenu && (
          <div
            onClick={() => setMobileMenu(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] lg:hidden"
          />
        )}

        {/* SIDEBAR */}
        <div className="pointer-events-none opacity-70 select-none">
  <Sidebar />
</div>

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
          <motion.header variants={itemVariants} className="flex items-center justify-between border-b border-[#222222] pb-4 mb-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenu(true)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#363636] bg-[#222222] text-gray-300 hover:text-white lg:hidden"
              >
                <Menu size={20} />
              </button>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                <span>Home</span>
                <ChevronRight size={14} />
                <span className="text-white font-medium">Profile</span>
              </div>
            </div>

            <button className="flex items-center gap-2 rounded-md border border-[#393939] bg-[#252525] px-3 py-2 text-sm font-medium text-white transition hover:bg-[#303030]">
              <span>Feedback</span>
            </button>
          </motion.header>

          {/* BANNER SECTION */}
          <motion.div variants={itemVariants} className="relative mb-6">
            <div className="h-44 sm:h-56 w-full rounded-2xl bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#1e3a8a] overflow-hidden flex items-center justify-center">
              <img 
                src="https://lms.saylanimit.com/assets/logo.6lrMPvRL.png" 
                alt="SMIT Banner Logo" 
                className="w-36 opacity-30 object-contain"
              />
            </div>

            {/* PROFILE INFO OVERLAY */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between px-4 sm:px-6 -mt-16 sm:-mt-20 gap-4">
              <div className="flex flex-col sm:flex-row sm:items-end gap-5">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full border-4 border-[#111111] bg-[#222222] overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
                    alt="User Profile" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mb-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-white">Ghulam Hassan</h1>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded text-xs font-semibold bg-[#222222] text-gray-300 border border-[#333]">
                    Student
                  </span>
                </div>
              </div>

              <button className="flex items-center gap-2 rounded-xl bg-[#0085ff] hover:bg-[#006edb] px-4 py-2.5 text-sm font-semibold text-white transition shadow">
                <Edit3 size={16} />
                <span>Edit Profile</span>
              </button>
            </div>
          </motion.div>

          {/* DETAILS GRID SECTION */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CONTACT INFO */}
            <motion.div variants={itemVariants} className="rounded-2xl border border-[#343434] bg-[#1a1a1a] p-5 shadow-lg space-y-5">
              <div className="flex items-center gap-2.5 border-b border-[#2d2d2d] pb-3">
                <Mail size={18} className="text-[#38bdf8]" />
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">Contact Info</h2>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-1">Email</p>
                <p className="text-sm font-medium text-gray-200 break-all">ghulamhassanofficial99@gmail.com</p>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-1">Phone</p>
                <p className="text-sm font-medium text-gray-200">03463628836</p>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-1">Address</p>
                <p className="text-sm font-medium text-gray-400 italic">Not Provided</p>
              </div>
            </motion.div>

            {/* PERSONAL INFORMATION & ENROLLED COURSES */}
            <div className="lg:col-span-2 space-y-6">
              {/* PERSONAL INFORMATION */}
              <motion.div variants={itemVariants} className="rounded-2xl border border-[#343434] bg-[#1a1a1a] p-5 shadow-lg space-y-5">
                <div className="flex items-center gap-2.5 border-b border-[#2d2d2d] pb-3">
                  <User size={18} className="text-[#00c98b]" />
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider">Personal Information</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Gender</p>
                    <p className="text-sm font-medium text-gray-200">Male</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Date of Birth</p>
                    <p className="text-sm font-medium text-gray-200">April 2, 2007</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Last Qualification</p>
                    <p className="text-sm font-medium text-gray-400 italic">Not Provided</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">CNIC</p>
                    <p className="text-sm font-medium text-gray-200 font-mono">4220124784319</p>
                  </div>
                </div>
              </motion.div>

              {/* ENROLLED COURSES */}
              <motion.div variants={itemVariants} className="rounded-2xl border border-[#343434] bg-[#1a1a1a] p-5 shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-[#2d2d2d] pb-3">
                  <div className="flex items-center gap-2.5">
                    <BookOpen size={18} className="text-[#934cff]" />
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider">Enrolled Courses</h2>
                  </div>
                  <span className="h-6 w-6 rounded-full bg-[#2a2a2a] flex items-center justify-center text-xs font-semibold text-gray-300">
                    1
                  </span>
                </div>

                <div className="relative rounded-xl border border-[#343434] bg-[#222222] p-4 flex items-center justify-between">
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-[#0085ff] rounded-l-xl" />
                  <div>
                    <h3 className="text-sm font-semibold text-white ml-2">Modern Web Application Development</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded text-[11px] font-semibold bg-[#162938] text-[#38bdf8] border border-[#38bdf8]/30">
                    ENROLLED
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}