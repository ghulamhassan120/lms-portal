'use client';
import { useSidebar } from '@/context/context';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, FileText, LinkIcon, X } from 'lucide-react';
import React from 'react';

const AssignmentViewModel = () => {
  const { isModalOpen, setIsModalOpen, selectedAssignment } = useSidebar();

  // Agar koi assignment select nahi hui toh modal render na ho
  if (!selectedAssignment) return null;

  return (
    <div>
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-[#343434] bg-[#1a1a1a] p-6 shadow-2xl text-white"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#343434] pb-4 mb-5">
                <h2 className="text-lg font-semibold text-white">
                  Assignment Information
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white transition"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content Body (Using selectedAssignment instead of map) */}
              <div className="space-y-6">
                {/* Main Card Info */}
                <div className="rounded-xl border border-[#343434] bg-[#222222] p-5 space-y-4">
                  <div>
                    <span className="text-xs text-gray-400">Title</span>
                    <h3 className="text-base font-bold text-white mt-0.5">
                      {selectedAssignment.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-gray-400 block mb-1">
                        Due Date
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Calendar size={15} className="text-gray-400" />
                        <span>{selectedAssignment.dueDate}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block mb-1">
                        Status
                      </span>
                      <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-[#18302d] text-[#00c98b] border border-[#00c98b]/30">
                        {selectedAssignment.status}
                      </span>
                    </div>
                  </div>

                  {/* Reference Links */}
                  <div>
                    <span className="text-xs text-gray-400 block mb-1">
                      Reference Links
                    </span>
                    <div className="rounded-lg bg-[#181818] border border-[#333] p-3 text-xs text-[#38bdf8] break-all">
                      https://www.figma.com/design/j55YNUXNnwQuZB7VatyVy/E-commerce-Website...
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <span className="text-xs text-gray-400 block mb-1">
                      Description
                    </span>
                    <div className="rounded-lg bg-[#181818] border border-[#333] p-3 text-xs text-gray-300 space-y-1.5 leading-relaxed">
                      <p>React.js frontend</p>
                      <p>Create all required e-commerce pages and functionality based on the Figma design</p>
                      <p>Fully responsive design for mobile, tablet, and desktop</p>
                      <p>Clean and reusable component structure</p>
                    </div>
                  </div>
                </div>

                {/* Submission Details Section */}
                <div className="rounded-xl border border-[#343434] bg-[#222222] p-5 space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#333] pb-3">
                    <FileText size={18} className="text-[#38bdf8]" />
                    <h3 className="text-sm font-semibold text-white">
                      Submission Details
                    </h3>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 block mb-1">
                      Submitted On
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Calendar size={15} className="text-gray-400" />
                      <span>Aug 17, 2026, 10:22 PM</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 block mb-1">
                      Submission Link
                    </span>
                    <div className="rounded-lg bg-[#181818] border border-[#333] p-3 text-xs text-[#38bdf8] flex items-center justify-between">
                      <span className="truncate">
                        https://e-cormarce-lu73.vercel.app/
                      </span>
                      <LinkIcon size={14} className="shrink-0 ml-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Close Button */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-lg bg-[#0085ff] hover:bg-[#006edb] px-5 py-2 text-sm font-semibold text-white transition shadow"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AssignmentViewModel;