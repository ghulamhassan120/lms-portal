"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
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

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const progressTopics = [
  {
    id: 1,
    title: "Web Designing",
    topics: "20/20",
    percentage: "100%",
    status: "completed",
    icon: CheckCircle2,
    iconColor: "text-[#00c98b]",
    topicsList: [
      {
        title: "HTML Text",
        completedDate: "Completed: Dec 15, 2025",
        subItems: ["Furniture E-Commerce Website", "Amazon Clone", "NASA Landing Page", "Landing Page Assignment"]
      },
      {
        title: "HTML Images",
        completedDate: "Completed: May 6, 2026",
        subItems: ["Furniture E-Commerce Website", "Amazon Clone", "NASA Landing Page", "Landing Page Assignment"]
      },
      {
        title: "HTML Table",
        completedDate: "Completed: May 6, 2026",
        subItems: ["Budgetting App"]
      },
      {
        title: "HTML Forms",
        completedDate: "Completed: May 6, 2026",
        subItems: ["Budgetting App","Landing Page Assignment"]
      },
      {
    title: "HTML Audio/Video Tags",
    completedDate: "Completed: May 6, 2026",
    subItems: ["NASA Landing Page"]
  },
  {
    title: "HTML Links",
    completedDate: "Completed: May 6, 2026",
    subItems: ["Amazon Clone"]
  },
  {
    title: "Grid system",
    completedDate: "Completed: Feb 12, 2026",
    subItems: [
      "Amazon Clone",
      "Landing Page Assignment",
      "Grid Assignment no 2",
      "Grid Assignment no 1"
    ]
  },
  {
    title: "Font Awesome",
    completedDate: "Completed: Feb 13, 2026",
    subItems: [
      "Budgetting App",
      "Amazon Clone",
      "Landing Page Assignment"
    ]
  },
  {
    title: "Bootstrap",
    completedDate: "Completed: Feb 16, 2026",
    subItems: ["Amazon Clone"]
  },
  {
    title: "Css3",
    completedDate: "Completed: Dec 15, 2025",
    subItems: [
      "Furniture E-Commerce Website",
      "Amazon Clone",
      "NASA Landing Page",
      "Landing Page Assignment"
    ]
  },
  {
    title: "Google Fonts",
    completedDate: "Completed: Feb 12, 2026",
    subItems: [
      "Amazon Clone",
      "NASA Landing Page",
      "Landing Page Assignment"
    ]
  },
  {
    title: "CSS Variables",
    completedDate: "Completed: Feb 12, 2026",
    subItems: []
  },
  {
    title: "Netlify Hosting",
    completedDate: "Completed: Feb 10, 2026",
    subItems: []
  },
  {
    title: "Github",
    completedDate: "Completed: Feb 10, 2026",
    subItems: [
      "Furniture E-Commerce Website",
      "Budgetting App",
      "Amazon Clone",
      "NASA Landing Page",
      "Landing Page Assignment"
    ]
  },
  {
    title: "Github Hosting",
    completedDate: "Completed: Feb 10, 2026",
    subItems: [
      "Budgetting App",
      "Amazon Clone",
      "NASA Landing Page",
      "Landing Page Assignment"
    ]
  },
  {
    title: "CSS Animations",
    completedDate: "Completed: Feb 13, 2026",
    subItems: ["Amazon Clone"]
  },
  {
    title: "Media queries",
    completedDate: "Completed: Feb 16, 2026",
    subItems: [
      "Amazon Clone",
      "NASA Landing Page",
      "Landing Page Assignment"
    ]
  },
  {
    title: "Surge hosting",
    completedDate: "Completed: Feb 10, 2026",
    subItems: ["Amazon Clone"]
  },
  {
    title: "Domain & Hosing Subscription (Deployment)",
    completedDate: "Completed: Feb 18, 2026",
    subItems: []
  },
  {
    title: "Flex box",
    completedDate: "Completed: Feb 5, 2026",
    subItems: [
      "Budgetting App",
      "Amazon Clone",
      "NASA Landing Page",
      "Landing Page Assignment"
    ]
  }
    ]
  },
  {
    id: 2,
    title: "Front-End Development",
    topics: "27/31",
    percentage: "87%",
    status: "pending",
    icon: Clock,
    iconColor: "text-[#f59e0b]",
    topicsList: [
    {
    title: "JavaScript Introduction",
    completedDate: "Completed: Feb 21, 2026",
    subItems: ["JavaScript Assignment – 25 Questions"]
  },
  {
    title: "JavaScript Chapter 1 - 10",
    completedDate: "Completed: Mar 3, 2026",
    subItems: [
      "JavaScript Assignment – 25 Questions",
      "Budgetting App"
    ]
  },
  {
    title: "JavaScript Chapter 11 - 20",
    completedDate: "Completed: Apr 6, 2026",
    subItems: [
      "JavaScript Assignment – 25 Questions",
      "Budgetting App"
    ]
  },
  {
    title: "JavaScript Quiz 1",
    completedDate: "Completed: Apr 19, 2026",
    subItems: []
  },
  {
    title: "JavaScript Chapter 21 - 30",
    completedDate: "Completed: May 3, 2026",
    subItems: [
      "JavaScript Assignment – 25 Questions",
      "Budgetting App"
    ]
  },
  {
    title: "JavaScript Chapter 31 - 40",
    completedDate: "Completed: May 4, 2026",
    subItems: [
      "JavaScript Assignment – 25 Questions",
      "Budgetting App"
    ]
  },
  {
    title: "JavaScript Quiz 2",
    completedDate: "Completed: May 18, 2026",
    subItems: []
  },
  {
    title: "JavaScript Chapter 41 - 50",
    completedDate: "Completed: May 11, 2026",
    subItems: [
      "JavaScript Assignment – 25 Questions",
      "Budgetting App",
      "Amazon Clone"
    ]
  },
  {
    title: "JavaScript Chapter 51 - 60",
    completedDate: "Completed: May 20, 2026",
    subItems: [
      "JavaScript Assignment – 25 Questions",
      "Budgetting App"
    ]
  },
  {
    title: "JavaScript Quiz 3",
    completedDate: "Completed: Jun 3, 2026",
    subItems: []
  },
  {
    title: "JavaScript Book Completed",
    completedDate: "Completed: Jun 11, 2026",
    subItems: [
      "Furniture E-Commerce Website",
      "JavaScript Assignment – 25 Questions"
    ]
  },
  {
    title: "JavaScript Quiz 4",
    completedDate: "Completed: Jun 27, 2026",
    subItems: []
  },
  {
    title: "Var vs Let vs Const",
    completedDate: "Completed: Jun 12, 2026",
    subItems: []
  },
  {
    title: "Template Literals",
    completedDate: "Completed: Jun 20, 2026",
    subItems: []
  },
  {
    title: "Arrow Functions",
    completedDate: "Completed: Jun 15, 2026",
    subItems: []
  },
  {
    title: "Iterators & For..of",
    completedDate: "Completed: Jul 19, 2026",
    subItems: []
  },
  {
    title: "Array Advance Methods",
    completedDate: "Completed: Jul 19, 2026",
    subItems: []
  },
  {
    title: "JavaScript Behind the Scenes",
    completedDate: "Completed: Aug 11, 2026",
    subItems: []
  },
  {
    title: "Destructuring, Rest & Spread Operators",
    completedDate: "Completed: Jun 17, 2026",
    subItems: []
  },
  {
    title: "SET, MAP",
    completedDate: "Completed: Jul 12, 2026",
    subItems: []
  },
  {
    title: "Default Parameters",
    completedDate: "Completed: Jun 17, 2026",
    subItems: []
  },
  {
    title: "First-Class and Higher-Order Functions",
    completedDate: "Completed: Sep 5, 2026",
    subItems: []
  },
  {
    title: "CallBack Functions",
    completedDate: "Completed: Jul 4, 2026",
    subItems: []
  },
  {
    title: "Call, Apply, Bind",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Closures",
    completedDate: "Completed: Jul 12, 2026",
    subItems: []
  },
  {
    title: "OOP with JavaScript",
    completedDate: "Completed: Jul 6, 2026",
    subItems: []
  },
  {
    title: "Asynchronous JavaScript",
    completedDate: "Completed: 3 days ago",
    subItems: []
  },
  {
    title: "TypeScript",
    completedDate: "Completed: Jul 28, 2026",
    subItems: []
  },
  {
    title: "Advance Github",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "GSAP Animations",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Supabase or Firebase",
    completedDate: "Not Completed",
    subItems: []
  }
    ]
  },
  {
    id: 3,
    title: "Modern Front-End Development",
    topics: "10/14",
    percentage: "71%",
    status: "pending",
    icon: Clock,
    iconColor: "text-[#f59e0b]",
    topicsList: [
      {
    title: "ReactJS Introduction & How to Create React Project",
    completedDate: "Completed: Aug 6, 2026",
    subItems: [
      "Admin panel (E commerce Dashboad)",
      "E-Commerce Website (React js)"
    ]
  },
  {
    title: "Components , Props and JSX",
    completedDate: "Completed: Aug 6, 2026",
    subItems: [
      "Admin panel (E commerce Dashboad)",
      "E-Commerce Website (React js)"
    ]
  },
  {
    title: "State, Events, Forms",
    completedDate: "Completed: Aug 23, 2026",
    subItems: [
      "Admin panel (E commerce Dashboad)"
    ]
  },
  {
    title: "React in Depth and Behind the Scenes (Components , Composition, Re-useability)",
    completedDate: "Completed: Aug 17, 2026",
    subItems: []
  },
  {
    title: "Effects and Data Fetching in React",
    completedDate: "Completed: Aug 11, 2026",
    subItems: [
      "E-Commerce Website (React js)"
    ]
  },
  {
    title: "Custom Hooks, Ref, useReducer etc",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Class-based React (Optional - not necessary)",
    completedDate: "Completed: Sep 5, 2026",
    subItems: []
  },
  {
    title: "Single Page Application (SPA) - React Router DOM",
    completedDate: "Completed: Aug 11, 2026",
    subItems: [
      "Admin panel (E commerce Dashboad)"
    ]
  },
  {
    title: "State Management - Context Api",
    completedDate: "Completed: Sep 5, 2026",
    subItems: [
      "Admin panel (E commerce Dashboad)"
    ]
  },
  {
    title: "Performance Optimization",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Redux & Redux ToolKit with Thunk",
    completedDate: "Completed: Sep 8, 2026",
    subItems: []
  },
  {
    title: "Tailwind, Material UI, Styled Components OverView",
    completedDate: "Not Completed",
    subItems: [
      "Admin panel (E commerce Dashboad)"
    ]
  },
  {
    title: "FrontEnd Deployment through Vercel",
    completedDate: "Completed: Aug 23, 2026",
    subItems: [
      "E-Commerce Website (React js)"
    ]
  },
  {
    title: "NextJS",
    completedDate: "Not Completed",
    subItems: [
      "Admin panel (E commerce Dashboad)"
    ]
  }
    ]
  },
  {
    id: 4,
    title: "Back-End Development",
    topics: "0/16",
    percentage: "0%",
    status: "pending",
    icon: Clock,
    iconColor: "text-[#f59e0b]",
    topicsList: [
      {
    title: "NodeJS",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "ExpressJS",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "MongoDB",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Security and Authentication",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Multer - Media Uploading",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Sockets",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "GraphQL",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "PostGresSQL",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Sequelize",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Payment Integration",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Scalable System - Caching",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Scalable System - Messaging Queues",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "CI / CD",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Node Production and Cloud Deployment",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "NodeJS Optimization",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Dockers - Containterization",
    completedDate: "Not Completed",
    subItems: []
  }
    ]
  },
];

export default function ProgressPage() {
  const [openModuleId, setOpenModuleId] = useState<number | null>(null);
  const { collapsed } = useSidebar();

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
            <div className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">
                  81
                </div>
                <p className="mt-1 text-sm text-gray-400">Total Topics</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18302d]">
                <BookOpen size={20} className="text-[#00c98b]" />
              </div>
            </div>

            {/* Completed Topics */}
            <div className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">
                  57
                </div>
                <p className="mt-1 text-sm text-gray-400">Completed Topics</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b2638]">
                <GraduationCap size={22} className="text-[#934cff]" />
              </div>
            </div>

            {/* Pending Topics */}
            <div className="flex items-center justify-between rounded-xl border border-[#343434] bg-[#232323] p-5">
              <div>
                <div className="text-[27px] font-semibold text-[#e5e7eb]">
                  24
                </div>
                <p className="mt-1 text-sm text-gray-400">Pending Topics</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#381e1e]">
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
                  className="rounded-xl border border-[#343434] bg-[#232323] overflow-hidden transition-all"
                >
                  {/* Module Header Bar */}
                  <div
                    onClick={() => toggleModule(item.id)}
                    className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-[#2a2a2a] transition-all"
                  >
                    {/* Left Side: Icon & Title */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2a2a2a]">
                        <StatusIcon size={18} className={item.iconColor} />
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
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#009ce9] text-xs font-bold text-[#009ce9]">
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
                            className="rounded-xl border border-[#343434] bg-[#232323] p-4"
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
                              <div className="ml-6 rounded-lg bg-[#162235] border border-[#343434] p-3 space-y-2">
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