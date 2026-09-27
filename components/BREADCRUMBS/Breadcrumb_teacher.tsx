'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { itemVariants } from '../animation/motion'
import { ChevronRight, Menu, MessageSquare, Plus, X } from 'lucide-react'
import { useSidebar } from '@/context/context'
import { usePathname } from 'next/navigation'

const Breadcrumb_teacher = () => {
      const { collapsed, setMobileMenu, mobileMenu ,activeTab,setActiveTab} = useSidebar()
      const pathname = usePathname()
      // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    // Form state (new assignment data ke liye)
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        topics: '',
        dueDate: '',
        isHackathon: false
    })

    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log("New Assignment Data:", formData)
        // Yahan aap apni API call ya state update kar sakte hain
        setIsModalOpen(false) // Modal close karne ke liye
    }
  return (
     <motion.header variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#222222] pb-4 mb-5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenu(true)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#363636] bg-[#222222] text-gray-300 hover:text-white lg:hidden"
              >
                <Menu size={20} />
              </button>
              <div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-1">
                  <span>Dashboard</span>
                  <ChevronRight size={14} />
                  <span className="text-[#9ca3af]">Modern Web Application Development</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-white">Modern Web Application Development</h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-md border border-[#393939] bg-[#252525] px-3 py-2 text-sm font-medium text-white transition hover:bg-[#303030]">
                <MessageSquare size={16} />
                <span>Feedback</span>
              </button>
              {(activeTab === "Assignments" || pathname==='/dashboard/teacher/assignments') && (
                <button className="flex items-center gap-2 rounded-md bg-[#0085ff] hover:bg-[#006edb] px-3.5 py-2 text-sm font-semibold text-white transition shadow"
                onClick={() => setIsModalOpen(true)}
                >
                  <Plus size={16} />
                  <span>New Assignment</span>
                </button>
              )}
            </div>


            {/* Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full max-w-lg rounded-xl border border-neutral-800 bg-[#232323] p-6 shadow-2xl text-gray-100"
                    >
                        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-4">
                            <h2 className="text-lg font-bold text-white">Create New Assignment</h2>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="p-1 rounded-lg hover:bg-neutral-800 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1">Title</label>
                                <input 
                                    type="text" 
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                                    placeholder="Enter assignment title"
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3.5 py-2 text-sm text-white focus:border-[#0085ff] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1">Description</label>
                                <textarea 
                                    required
                                    value={formData.desc}
                                    onChange={(e) => setFormData({...formData, desc: e.target.value})}
                                    placeholder="Enter description"
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3.5 py-2 text-sm text-white focus:border-[#0085ff] focus:outline-none resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-400 mb-1">Topic</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.topics}
                                        onChange={(e) => setFormData({...formData, topics: e.target.value})}
                                        placeholder="e.g. React, Node.js"
                                        className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3.5 py-2 text-sm text-white focus:border-[#0085ff] focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-400 mb-1">Due Date</label>
                                    <input 
                                        type="date" 
                                        required
                                        value={formData.dueDate}
                                        onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                                        className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3.5 py-2 text-sm text-white focus:border-[#0085ff] focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 pt-2">
                                <input 
                                    type="checkbox" 
                                    id="isHackathon"
                                    checked={formData.isHackathon}
                                    onChange={(e) => setFormData({...formData, isHackathon: e.target.checked})}
                                    className="rounded border-neutral-700 bg-neutral-900 text-[#0085ff] focus:ring-0"
                                />
                                <label htmlFor="isHackathon" className="text-xs font-medium text-gray-300 cursor-pointer">
                                    Mark as Hackathon
                                </label>
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-800">
                                <button 
                                    type="button" 
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm font-medium text-gray-300 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-[#0085ff] hover:bg-[#006edb] text-sm font-semibold text-white transition-colors"
                                >
                                    Add Assignment
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
          </motion.header>
  )
}

export default Breadcrumb_teacher