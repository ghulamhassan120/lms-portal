'use client'
import Breadcrumb_teacher from '@/components/BREADCRUMBS/Breadcrumb_teacher'
import TeacherSidebar from '@/components/SideBar/TeacherSidebar'
import { assignments } from '@/config/assest'
import { useSidebar } from '@/context/context'
import { motion } from 'framer-motion'
import { Edit3, Eye } from 'lucide-react'
import React from 'react'

const Assignment = () => {
    const { activeTab, setActiveTab } = useSidebar()

    return (
        <div className="min-h-screen bg-[#18181b] text-gray-100 flex">
            {/* Sidebar (Fixed width ya responsive) */}
            <TeacherSidebar />

            {/* Main Content Area - Sidebar ki width ke barabar margin/offset diya hai */}
            <div className="flex-1 flex flex-col min-w-0 md:ml-50">
                {/* Breadcrumb Header */}
                <div className="px-6 pt-6">
                    <Breadcrumb_teacher />
                </div>

                {/* Content Section */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-6 flex items-center justify-between">
                            <h1 className="text-2xl font-bold tracking-tight text-white">Assignments Management</h1>
                        </div>

                        <motion.div 
                            key="assignments" 
                            initial={{ opacity: 0, y: 10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0, y: -10 }}
                            className="rounded-xl border border-neutral-800 bg-[#232323] shadow-xl overflow-hidden"
                        >
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-gray-300 min-w-[800px]">
                                    <thead className="border-b border-neutral-800 bg-neutral-900/50 text-xs text-gray-400 uppercase tracking-wider">
                                        <tr>
                                            <th className="py-4 px-6">Title</th>
                                            <th className="py-4 px-6">Description</th>
                                            <th className="py-4 px-6">Topics</th>
                                            <th className="py-4 px-6">Due Date</th>
                                            <th className="py-4 px-6 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-neutral-800">
                                        {assignments.map((asm, i) => (
                                            <tr 
                                                key={i} 
                                                className={`transition-colors ${asm.isHackathon ? "bg-purple-950/20 hover:bg-purple-950/30" : "hover:bg-neutral-800/50"}`}
                                            >
                                                <td className="py-4 px-6 font-medium text-white">
                                                    <div className="flex flex-col gap-1.5">
                                                        <span>{asm.title}</span>
                                                        {asm.isHackathon && (
                                                            <span className="w-fit rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-purple-400">
                                                                HACKATHON
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-gray-400 text-xs max-w-[250px] truncate">
                                                    {asm.desc}
                                                </td>
                                                <td className="py-4 px-6">
                                                    <span className="inline-block px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 text-xs font-medium border border-sky-500/20">
                                                        {asm.topics}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-gray-300 text-xs">
                                                    {asm.dueDate}
                                                </td>
                                                <td className="py-4 px-6 text-right">
                                                    <div className="flex items-center justify-end gap-3 text-gray-400">
                                                        <button 
                                                            title="View" 
                                                            className="p-1.5 rounded-lg hover:bg-neutral-700/50 hover:text-white transition-colors"
                                                        >
                                                            <Eye size={17} />
                                                        </button>
                                                        <button 
                                                            title="Edit" 
                                                            className="p-1.5 rounded-lg hover:bg-neutral-700/50 hover:text-white transition-colors"
                                                        >
                                                            <Edit3 size={17} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Assignment