"use client";

import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Clock3,
  GraduationCap,
  CalendarDays,
  MapPin,
  Hash,
  Award,
  UserRound,
  Menu,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { menuItems } from "@/config/menu";
import { classDays, schedule } from "@/config/assest";
import { ContextType, SidebarContext } from "@/context/context";
import Sidebar from "@/components/SideBar/Sidebar";



const fadeUp: = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function Dashboard() {
 const {setActiveMenu,setMobileMenu,collapsed,mobileMenu,activeMenu,setCollapsed}=useContext<ContextType>(SidebarContext)
  const [activeTab, setActiveTab] = useState("Quizzes");

 

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
              className="fixed inset-0 z-40 bg-black/10x backdrop-blur-[2px] lg:hidden"
              
            />

          )}
        </AnimatePresence>

        {/* SIDEBAR */}
          <Sidebar/>
        {/* MAIN */}

        <main
        className={`
            min-w-0
            flex-1
            transition-all
            duration-300
            ml-0
            {/* Yahan hum ne dono classes ko aik ternary condition mein kar diya hai */}
            ${collapsed ? "lg:ml-[78px]" : "lg:ml-[196px]"}
          `}
        >
          {/* HEADER */}

          <motion.header
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              flex
              min-h-[76px]
              items-center
              justify-between
              gap-3
              border-b
              border-[#222222]
              px-4
              py-3

              sm:px-5
              lg:px-6
            "
          >
            {/* Left */}
            <div className="flex min-w-0 items-center gap-3">
              {/* Mobile menu */}
              <button
                onClick={() => setMobileMenu(true)}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-[#363636]
                  bg-[#222222]
                  text-gray-300
                  hover:text-white

                  lg:hidden
                "
              >
                <Menu size={20} />
              </button>

              <div
                className="
                  flex
                  min-w-0
                  items-center
                  gap-2
                  text-sm
                "
              >
                <span className="shrink-0 text-[#d5d5d5]">Home</span>

                <ChevronRight size={15} className="shrink-0 text-gray-500" />

                <span
                  className="
                    truncate
                    font-medium
                    text-[#9ca3af]
                  "
                >
                  Modern Web Application Development
                </span>
              </div>
            </div>

            {/* Feedback */}
            <button
              className="
                flex
                shrink-0
                items-center
                gap-2
                rounded-md
                border
                border-[#393939]
                bg-[#252525]
                px-3
                py-2
                text-sm
                font-medium
                text-white
                transition
                hover:bg-[#303030]
                sm:px-4
              "
            >
              <MessageSquare size={16} />

              <span className="hidden sm:inline">Feedback</span>
            </button>
          </motion.header>

          {/* ================================================= */}
          {/* CONTENT */}
          {/* ================================================= */}

          <div
            className="
              p-3

              sm:p-4

              lg:p-5
            "
          >
            {/* ================================================= */}
            {/* TOP CARDS */}
            {/* ================================================= */}

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="
                grid
                grid-cols-1
                gap-4

                md:grid-cols-2

                xl:grid-cols-[1fr_1fr_337px]
              "
            >
              {/* Attendance */}
              <motion.div
                variants={fadeUp}
                className="
                  flex
                  min-h-[107px]
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-[#343434]
                  bg-[#232323]
                  px-5

                  sm:px-6
                "
              >
                <div>
                  <div className="text-[27px] font-medium">
                    <span className="text-[#e5e7eb]">63</span>

                    <span className="text-gray-400">/129</span>
                  </div>

                  <p className="mt-1 text-sm text-white">Attendance</p>
                </div>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#18302d]
                  "
                >
                  <Clock3 size={21} className="text-[#00c98b]" />
                </div>
              </motion.div>

              {/* Assignment */}
              <motion.div
                variants={fadeUp}
                className="
                  flex
                  min-h-[107px]
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-[#343434]
                  bg-[#232323]
                  px-5

                  sm:px-6
                "
              >
                <div>
                  <div className="text-[27px] font-medium">
                    <span className="text-[#e5e7eb]">9</span>

                    <span className="text-gray-400">/13</span>
                  </div>

                  <p className="mt-1 text-sm text-white">Assignment</p>
                </div>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#2b2638]
                  "
                >
                  <GraduationCap size={22} className="text-[#934cff]" />
                </div>
              </motion.div>

              {/* Schedule */}
              <motion.div
                variants={fadeUp}
                className="
                  rounded-xl
                  border
                  border-[#343434]
                  bg-[#232323]
                  p-3

                  md:col-span-2

                  xl:col-span-1
                "
              >
                <div className="mb-3 flex items-center gap-2">
                  <CalendarDays size={19} />

                  <h2 className="font-semibold">Class Schedule</h2>
                </div>

                <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                  {schedule.map((item) => (
                    <div
                      key={item.day}
                      className={`
                        flex
                        h-[51px]
                        flex-col
                        items-center
                        justify-center
                        rounded-md
                        border
                        text-[10px]
                        transition

                        sm:text-[11px]

                        ${
                          item.active
                            ? "border-[#00c978] bg-[#00c978] text-white"
                            : "border-[#383838] bg-[#202020] text-gray-300"
                        }
                      `}
                    >
                      <span className="font-medium">{item.day}</span>

                      <span>{item.date}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ================================================= */}
            {/* COURSE + TABS */}
            {/* ================================================= */}

            <div
              className="
                mt-5
                grid
                grid-cols-1
                gap-4

                xl:grid-cols-[1fr_337px]
              "
            >
              {/* ================================================= */}
              {/* ACTIVE COURSE */}
              {/* ================================================= */}

              <motion.section
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25,
                }}
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#343434]
                  bg-[#232323]
                "
              >
                {/* Course Header */}
                <div
                  className="
                    relative
                    bg-[#1b2434]
                    px-4
                    py-5

                    sm:px-6
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      gap-3

                      lg:flex-row
                      lg:items-center
                      lg:justify-between
                    "
                  >
                    <h1
                      className="
                        text-xl
                        font-bold
                        leading-tight
                        text-[#f3f4f6]

                        sm:text-[23px]

                        lg:text-[25px]
                      "
                    >
                      Modern Web Application Development
                    </h1>

                    <span
                      className="
                        w-fit
                        shrink-0
                        rounded-md
                        border
                        border-[#009ce9]
                        px-3
                        py-1
                        text-[11px]
                        font-medium
                        text-[#00a9f4]
                      "
                    >
                      ENROLLED
                    </span>
                  </div>

                  {/* Class Times */}
                  <div
                    className="
                      mt-3
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {classDays.map((day) => (
                      <span
                        key={day}
                        className="
                          rounded-md
                          border
                          border-[#454545]
                          bg-[#2b2b2b]
                          px-2.5
                          py-1
                          text-[11px]
                          text-gray-200

                          sm:px-3
                          sm:text-xs
                        "
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Course Body */}
                <div
                  className="
                    px-4
                    py-5

                    sm:px-6
                  "
                >
                  <div className="mb-2 flex justify-between gap-3 text-sm">
                    <span className="text-[#9bb8e8]">Progress</span>

                    <span className="text-right text-[#b7c9e8]">
                      74% Completed
                    </span>
                  </div>

                  {/* Progress */}
                  <div className="h-[8px] overflow-hidden rounded-full bg-[#353535]">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: "74%",
                      }}
                      transition={{
                        duration: 1.2,
                        delay: 0.5,
                        ease: "easeOut",
                      }}
                      className="h-full bg-[#00c978]"
                    />
                  </div>

                  {/* Info */}
                  <div
                    className="
                      mt-5
                      grid
                      grid-cols-1
                      gap-4

                      sm:grid-cols-2
                    "
                  >
                    <InfoItem icon={Hash} label="Batch:" value="20" />

                    <InfoItem icon={Award} label="Roll:" value="525239" />

                    <InfoItem
                      icon={MapPin}
                      label="Campus:"
                      value="Zaitoon Ashraf IT Park"
                    />

                    <InfoItem icon={MapPin} label="City:" value="Karachi" />
                  </div>
                </div>
              </motion.section>

              {/* ================================================= */}
              {/* TABS */}
              {/* ================================================= */}

              <motion.section
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.35,
                }}
                className="
                  min-h-[162px]
                  rounded-xl
                  border
                  border-[#343434]
                  bg-[#232323]
                  p-3
                "
              >
                <div
                  className="
                    grid
                    grid-cols-3
                    rounded-lg
                    bg-[#292929]
                    p-1
                  "
                >
                  {["Assignments", "Quizzes", "Events"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`
                        rounded-md
                        py-2
                        text-[11px]
                        transition-all

                        sm:text-xs

                        ${
                          activeTab === tab
                            ? "bg-[#111111] text-white shadow"
                            : "text-gray-400 hover:text-white"
                        }
                      `}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <motion.div
                  key={activeTab}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    flex
                    h-[100px]
                    items-center
                    justify-center
                    px-2
                    text-center
                    text-sm
                    text-gray-400
                  "
                >
                  No upcoming {activeTab.toLowerCase()}
                </motion.div>
              </motion.section>
            </div>

            {/* ================================================= */}
            {/* FEE */}
            {/* ================================================= */}

            <motion.section
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
              }}
              className="mt-5"
            >
              <h2 className="mb-2 text-base font-semibold text-white">Fee</h2>

              {/* Horizontal scroll on mobile */}
              <div
                className="
                  overflow-x-auto
                  rounded-xl
                  border
                  border-[#343434]
                "
              >
                <div
                  className="
                    min-w-[800px]
                    overflow-hidden
                    bg-[#232323]
                  "
                >
                  <div
                    className="
                      grid
                      grid-cols-6
                      border-b
                      border-[#343434]
                      px-4
                      py-3
                      text-sm
                      text-gray-400
                    "
                  >
                    <span>Month</span>
                    <span>Amount</span>
                    <span>Type</span>
                    <span>Due date</span>
                    <span>Voucher ID</span>
                    <span>Status</span>
                  </div>

                  <div className="px-4 py-5 text-center text-sm text-gray-500">
                    No fee records available
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ================================================= */
/* INFO ITEM */
/* ================================================= */

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div
      className="
        flex
        min-w-0
        items-center
        gap-2
        text-sm
      "
    >
      <Icon size={17} className="shrink-0 text-gray-400" />

      <span className="shrink-0 text-gray-300">{label}</span>

      <span
        className="
          truncate
          text-[#a9bfe5]
        "
      >
        {value}
      </span>
    </div>
  );
}

export default Dashboard;
