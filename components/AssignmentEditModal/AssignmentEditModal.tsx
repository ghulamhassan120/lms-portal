'use client';
import { useSidebar } from '@/context/context';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Upload, Trash2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const AssignmentEditModal = () => {
  const { isEditModalOpen, setIsEditModalOpen, selectedAssignment } = useSidebar();
  const [submissionLink, setSubmissionLink] = useState("");
  const [submissionText, setSubmissionText] = useState("");

  useEffect(() => {
    if (selectedAssignment) {
      setSubmissionLink(selectedAssignment.link || "https://furniture-seven-gamma.vercel.app");
      setSubmissionText(selectedAssignment.title || "");
    }
  }, [selectedAssignment]);

  if (!isEditModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-lg rounded-xl border border-[#343434] bg-[#1a1a1a] p-6 shadow-2xl text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#343434] pb-4 mb-5">
            <h2 className="text-lg font-semibold text-white">Edit Assignment</h2>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="text-gray-400 hover:text-white transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form Body */}
          <div className="space-y-4">
            {/* Submission Link */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Submission Link</label>
              <input
                type="text"
                value={submissionLink}
                onChange={(e) => setSubmissionLink(e.target.value)}
                className="w-full h-10 bg-[#222222] border border-[#3a3a3a] rounded-lg px-3 text-sm text-white focus:outline-none focus:border-[#0085ff]"
              />
            </div>

            {/* Submission Images */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Submission Images</label>
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-20 h-20 rounded-lg border border-[#3a3a3a] bg-[#222222] overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80" 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-1 right-1 h-5 w-5 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-red-600 transition">
                    <X size={12} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  readOnly 
                  value="1 file(s) selected" 
                  className="flex-1 h-10 bg-[#222222] border border-[#3a3a3a] rounded-lg px-3 text-sm text-gray-400"
                />
                <button className="flex items-center gap-1.5 h-10 px-4 rounded-lg bg-[#2a2a2a] border border-[#3a3a3a] text-sm font-medium text-white hover:bg-[#353535] transition">
                  <Upload size={16} />
                  <span>+ Add Image</span>
                </button>
              </div>
            </div>

            {/* Submission Text */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Submission Text *</label>
              <textarea
                rows={3}
                value={submissionText}
                onChange={(e) => setSubmissionText(e.target.value)}
                className="w-full bg-[#222222] border border-[#3a3a3a] rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#0085ff]"
              />
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-[#343434]">
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="px-4 py-2 rounded-lg bg-[#2a2a2a] hover:bg-[#353535] text-sm font-semibold text-white transition"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                alert("Assignment updated successfully!");
                setIsEditModalOpen(false);
              }}
              className="px-4 py-2 rounded-lg bg-[#0085ff] hover:bg-[#006edb] text-sm font-semibold text-white transition shadow"
            >
              Update Submission
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AssignmentEditModal;