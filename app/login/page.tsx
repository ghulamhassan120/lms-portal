"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [dob, setDob] = useState("");
  const [activeTab, setActiveTab] = useState<"login" | "create">("login");
  const [role, setRole] = useState<"student" | "teacher" | "admin">("admin");
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  console.log(password);
  console.log(cnic);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan aap apni authentication API call kar sakte hain
    // Filhal role ke mutabiq dashboard par redirect kar rahe hain:
    if (role === "student") {
      router.push("/dashboard/student");
    } else if (role === "teacher") {
      router.push("/dashboard/teacher");
    } else if (role === "admin") {
      router.push("/dashboard/admin");
    }
  };
  return (
    <main className="min-h-screen bg-[#111111] flex justify-center px-4 pt-[15px] text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[400px]"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center mb-[15px]"
        >
          <img
            src="https://lms.saylanimit.com/assets/logo.6lrMPvRL.png"
            alt="SMIT Logo"
            className="w-[110px] h-auto"
          />

          <h1 className="text-[15px] font-medium mt-[3px]">
            {role === "student"
              ? "Student Portal"
              : role === "teacher"
                ? "Teacher Portal"
                : "Admin Portal"}
          </h1>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="w-full h-[36px] bg-[#292929] rounded-[7px] p-[4px] flex mb-[8px]"
        >
          <button
            type="button"
            onClick={() => setActiveTab("login")}
            className={`flex-1 rounded-[5px] text-[13px] transition-all duration-200 ${
              activeTab === "login"
                ? "bg-[#111111] text-white"
                : "text-[#858585]"
            }`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("create")}
            className={`flex-1 rounded-[5px] text-[13px] transition-all duration-200 ${
              activeTab === "create"
                ? "bg-[#111111] text-white"
                : "text-[#858585]"
            }`}
          >
            Create Password
          </button>
        </motion.div>

        {/* Login Card */}
      <motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="
    w-full
    min-h-[332px]
    bg-[#202020]
    border border-[#353535]
    rounded-[10px]
    px-[24px]
    pt-[22px]
    pb-[24px]
  "
>
  {/* ================= LOGIN ================= */}
  {activeTab === "login" ? (
    <>
      <h2 className="text-[16px] font-semibold mb-[4px]">
        Login
      </h2>

      <p className="text-[13px] leading-[19px] text-[#8d8d8d] mb-[27px]">
        Kindly provide the CNIC number and password
        <br />
        used during SMIT course registration.
      </p>

      <form onSubmit={handleLogin}>
        {/* CNIC */}
        <div className="mb-[11px]">
          <label className="block text-[13px] font-medium mb-[7px]">
            CNIC *
          </label>

          <input
            type="text"
            required
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="e.g. 42101-1234567-1"
            className="
              w-full
              h-[36px]
              bg-[#1d1d1d]
              border border-[#404040]
              rounded-[5px]
              outline-none
              px-[10px]
              text-[13px]
              focus:border-[#155da0]
              transition-colors
            "
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-[23px]">
          <label className="block text-[13px] font-medium mb-[7px]">
            Password *
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="
                w-full
                h-[36px]
                bg-[#1d1d1d]
                border border-[#404040]
                rounded-[5px]
                outline-none
                px-[10px]
                pr-[35px]
                text-[13px]
                focus:border-[#155da0]
                transition-colors
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute
                right-[10px]
                top-1/2
                -translate-y-1/2
                text-[#777]
                hover:text-white
                transition-colors
              "
            >
              {showPassword ? (
                <EyeOff size={15} />
              ) : (
                <Eye size={15} />
              )}
            </button>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="
            w-full
            h-[36px]
            rounded-[5px]
            bg-[#155a98]
            hover:bg-[#1967ad]
            text-[12px]
            font-medium
            transition-colors
          "
        >
          LOGIN
        </motion.button>
      </form>
    </>
  ) : (
    /* ================= CREATE PASSWORD ================= */
    <>
      <h2 className="text-[16px] font-semibold mb-[4px]">
        Create a Password
      </h2>

      <p className="text-[13px] leading-[19px] text-[#8d8d8d] mb-[27px]">
        Kindly provide the CNIC number and DOB used
        <br />
        during SMIT course registration.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          console.log("Create Password:", {
            cnic,
            dob,
            password,
          });

          // API yahan call karna hai
        }}
      >
        {/* CNIC */}
        <div className="mb-[11px]">
          <label className="block text-[13px] font-medium mb-[7px]">
            CNIC *
          </label>

          <input
            type="text"
            required
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="e.g. 42101-1234567-1"
            className="
              w-full
              h-[36px]
              bg-[#1d1d1d]
              border border-[#404040]
              rounded-[5px]
              outline-none
              px-[10px]
              text-[13px]
              focus:border-[#155da0]
              transition-colors
            "
          />
        </div>

        {/* DOB */}
        <div className="mb-[11px]">
          <label className="block text-[13px] font-medium mb-[7px]">
            DOB *
          </label>

          <input
            type="date"
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="
              w-full
              h-[36px]
              bg-[#1d1d1d]
              border border-[#404040]
              rounded-[5px]
              outline-none
              px-[10px]
              text-[13px]
              text-white
              focus:border-[#155da0]
              transition-colors
            "
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-[23px]">
          <label className="block text-[13px] font-medium mb-[7px]">
            Password *
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="
                w-full
                h-[36px]
                bg-[#1d1d1d]
                border border-[#404040]
                rounded-[5px]
                outline-none
                px-[10px]
                pr-[35px]
                text-[13px]
                focus:border-[#155da0]
                transition-colors
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute
                right-[10px]
                top-1/2
                -translate-y-1/2
                text-[#777]
                hover:text-white
                transition-colors
              "
            >
              {showPassword ? (
                <EyeOff size={15} />
              ) : (
                <Eye size={15} />
              )}
            </button>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="
            w-full
            h-[36px]
            rounded-[5px]
            bg-[#155a98]
            hover:bg-[#1967ad]
            text-[12px]
            font-medium
            transition-colors
          "
        >
          SUBMIT
        </motion.button>
      </form>
    </>
  )}
</motion.div>

        {/* Teacher Login */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={() => {
            if (role === "student") {
              setRole("teacher");
            } else if (role === "teacher") {
              setRole("admin");
            } else {
              setRole("student");
            }

            // Old credentials clear
            setCnic("");
            setPassword("");
            setShowPassword(false);
          }}
          className="
            w-full
            h-[36px]
            mt-[8px]
            rounded-[5px]
            bg-[#292929]
            border border-[#3a3a3a]
            text-[13px]
            hover:bg-[#303030]
            transition-colors
          "
        >
          Login as{" "}
          {role === "student"
            ? "Teacher"
            : role === "teacher"
              ? "Admin"
              : "Student"}
        </motion.button>
      </motion.div>
    </main>
  );
}
