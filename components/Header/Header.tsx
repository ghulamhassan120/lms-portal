import { useSidebar } from '@/context/context'
import { motion } from 'framer-motion'
import { ChevronRight, Menu, MessageSquare } from 'lucide-react'
import React from 'react'

const Header = () => {
    const {setMobileMenu}=useSidebar()
  return (
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
  )
}

export default Header