"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, ShieldCheck, GraduationCap, UserCheck ,BookUser} from "lucide-react";
import { useRouter } from "next/navigation";
import { useSidebar } from "@/context/context";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [dob, setDob] = useState("");
  const [activeTab, setActiveTab] = useState<"login" | "create">("login");
  const [role, setRole] = useState<"student" | "teacher" | "admin">("admin");
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {theme}=useSidebar()
  const isLight=theme==="dark"
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated network delay for professional feel
    setTimeout(() => {
      if (role === "student") {
        router.push("/dashboard/student");
      } else if (role === "teacher") {
        router.push("/dashboard/teacher");
      } else if (role === "admin") {
        router.push("/dashboard/admin");
      }
      setIsLoading(false);
    }, 800);
  };

  // Quick fill demo credentials helper
  const fillDemoCredentials = () => {
    setCnic("42101-1234567-1");
    setPassword("123456");
  };

  return (
    <main className="min-h-screen bg-[#111111] flex flex-col items-center justify-center px-4 py-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[400px]"
      >
        {/* Logo & Portal Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center mb-5"
        >
          <img
            src="https://lms.saylanimit.com/assets/logo.6lrMPvRL.png"
            alt="SMIT Logo"
            className="w-[110px] h-auto mb-2"
          />

          <div className={`flex items-center gap-2  ${isLight?"bg-[#202020]":"bg-[#FFF]"} border border-[#333] px-3 py-1 rounded-full text-xs font-medium text-gray-300`}>
            {role === "student" && <GraduationCap size={14} className="text-[#38bdf8]" />}
            {role === "teacher" && <BookUser size={14} className="text-[#00c98b]" />}
            {role === "admin" && <ShieldCheck size={14} className="text-[#f59e0b]" />}
            <span>
              {role === "student" ? "Student Portal" : role === "teacher" ? "Teacher Portal" : "Admin Control Panel"}
            </span>
          </div>
        </motion.div>

        {/* Tabs */}
        {role==='student'&&(<>     <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className={`w-full h-[36px]  ${isLight?"bg-[#292929]":"bg-[#f3f1f1]"} rounded-[7px] p-[4px] flex mb-[12px]`}
        >
          <button
            type="button"
            onClick={() => setActiveTab("login")}
            className={`flex-1 rounded-[5px] text-[13px] font-medium transition-all duration-200 ${
              activeTab === "login" ? "bg-[#111111] text-white shadow" : "text-[#858585]"
            }`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("create")}
            className={`flex-1 rounded-[5px] text-[13px] font-medium transition-all duration-200 cursor-pointer ${
              activeTab === "create" ? "bg-[#111111] text-white shadow" : "text-[#858585]"
            }`}
          >
            Create Password
          </button>
        </motion.div>
        </>)}
   

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`w-full b ${isLight?"bg-[#202020]":"bg-[#FFF]"} border border-[#353535] rounded-[10px] px-[24px] pt-[22px] pb-[24px] shadow-xl relative overflow-hidden`}>
          {/* Quick Demo Fill Helper Banner */}
          {activeTab === "login" && (
            <div className={`mb-4  ${isLight?"bg-[#1b222c]":"bg-[#FFF]"} border border-[#233850] rounded-lg p-2.5 flex items-center justify-between text-xs`}>
              <span className="text-[#38bdf8]">Testing mode active</span>
              <button 
                type="button" 
                onClick={fillDemoCredentials}
                className="text-white underline hover:text-[#38bdf8] font-medium transition cursor-pointer"
              >
                Auto-fill Demo
              </button>
            </div>
          )}

          {activeTab === "login" ? (
            <>
              <h2 className="text-[16px] font-semibold mb-[4px]">Login</h2>
              {role==='student'? <p className="text-[13px] leading-[19px] text-[#8d8d8d] mb-[20px]">
                Kindly provide the CNIC number and password used during SMIT course registration.
              </p>
            :
              <p className="text-[13px] leading-[19px] text-[#8d8d8d] mb-[20px]">
                Kindly provide your email and password to access the {role==="teacher"?"trainer":"admin"} portal.
              </p>
            }
             

              <form onSubmit={handleLogin}>
                {/* CNIC */}
                <div className="mb-[14px]">
                  {role==='student'?
                  <>
                    <label className="block text-[13px] font-medium mb-[7px]">CNIC *</label>
                  <input
                    type="text"
                    required
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                    placeholder="e.g 42201-2478431-9"
                    className={`w-full h-[38px]  ${isLight?"bg-[#1d1d1d]":"bg-[#FFF]"} border border-[#404040] rounded-[6px] outline-none px-[12px] text-[13px] focus:border-[#155da0] transition-colors`}
                  />
                  </>:
                  <>
                    <label className="block text-[13px] font-medium mb-[7px]">Email *</label>
                  <input
                    type="text"
                    required
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                    placeholder="example@gmail.com"
                    className={`w-full h-[38px] ${isLight?"bg-[#1d1d1d]":"bg-[#FFF]"} border border-[#404040] rounded-[6px] outline-none px-[12px] text-[13px] focus:border-[#155da0] transition-colors`}
                  />
                  </>}
               
                </div>

                {/* PASSWORD */}
                <div className="mb-[24px]">
                  <label className="block text-[13px] font-medium mb-[7px]">Password *</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className={`w-full h-[38px] ${isLight?"bg-[#1d1d1d]":"bg-[#FFF]"} border border-[#404040] rounded-[6px] outline-none px-[12px] pr-[35px] text-[13px] focus:border-[#155da0] transition-colors`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[#777] hover:text-white transition-colors cursor-pointer"
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isLoading}
                  className={`w-full h-[38px] rounded-[6px] ${!isLight&&"!text-white"} !bg-[#2B4F8C] hover:bg-[#1967ad] text-[13px] font-medium transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer`}
                >
                  {isLoading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "LOGIN"
                  )}
                </motion.button>
              </form>
            </>
          ) : (
            role==='student'&&(  <>
              <h2 className="text-[16px] font-semibold mb-[4px]">Create a Password</h2>
              <p className="text-[13px] leading-[19px] text-[#8d8d8d] mb-[20px]">
                Kindly provide the CNIC number and DOB used during SMIT course registration.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); alert("Password creation request submitted!"); }}>
                <div className="mb-[12px]">
                  <label className="block text-[13px] font-medium mb-[6px]">CNIC *</label>
                  <input
                    type="text"
                    required
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                    placeholder="e.g. 42101-1234567-1"
                    className={`w-full h-[38px] ${isLight?"bg-[#1d1d1d]":"bg-[#FFF]"} border border-[#404040] rounded-[6px] outline-none px-[12px] text-[13px] focus:border-[#155da0]`}
                  />
                </div>

                <div className="mb-[12px]">
                  <label className="block text-[13px] font-medium mb-[6px]">DOB *</label>
                  <input
                    type="date"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className={`w-full h-[38px] ${isLight?"bg-[#1d1d1d]":"bg-[#FFF]"} border border-[#404040] rounded-[6px] outline-none px-[12px] text-[13px] text-white focus:border-[#155da0]`}
                  />
                </div>

                <div className="mb-[20px]">
                  <label className="block text-[13px] font-medium mb-[6px]">New Password *</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    className={`w-full h-[38px] ${isLight?"bg-[#1d1d1d]":"bg-[#FFF]"}  border border-[#404040] rounded-[6px] outline-none px-[12px] text-[13px] focus:border-[#155da0]`}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full h-[38px] rounded-[6px] !bg-[#155a98] hover:bg-[#1967ad] text-[13px] font-medium transition-colors shadow-md dark:!text-white"
                >
                  SUBMIT
                </motion.button>
              </form>
            </>)
          )}
        </motion.div>

        {/* Switch Role Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`mt-3 flex items-center justify-between  ${isLight?"bg-[#202020]":"bg-[#FFF]"} border border-[#353535] rounded-[8px] p-2 px-4`}
        >
          <span className="text-xs text-gray-400">Switch Portal View:</span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => {
              if (role === "admin") setRole("student");
              else if (role === "student") setRole("teacher");
              else setRole("admin");
              setCnic("");
              setPassword("");
            }}
            className="text-xs font-semibold text-[#38bdf8] hover:underline flex items-center gap-1.5 py-1 px-2 rounded bg-[#2b2b2b] cursor-pointer"
          >
            <UserCheck size={13} />
            <span>
              {role === "admin" ? "Switch to Student" : role === "student" ? "Switch to Teacher" : "Switch to Admin"}
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </main>
  );
}