'use client'
import Breadcrumb_teacher from '@/components/BREADCRUMBS/Breadcrumb_teacher'
import TeacherSidebar from '@/components/SideBar/TeacherSidebar'
import React from 'react'

const Attendance = () => {
    return (
        <div className="min-h-screen bg-[#18181b] text-gray-100 flex">
            {/* Sidebar */}
            <TeacherSidebar />

            {/* Main Content Area - Sidebar ki width ke barabar margin diya hai */}
            <div className="flex-1 flex flex-col min-w-0 md:ml-50">
                {/* Breadcrumb Header */}
                <div className="px-6 pt-6">
                    <Breadcrumb_teacher />
                </div>

                {/* Content Section */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold tracking-tight text-white">Attendance Management</h1>
                        </div>

                        <div className="rounded-xl border border-[#343434] bg-[#232323] p-6 text-center text-gray-400">
                  Attendance logs and session marking tool for trainers will appear here.
                </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Attendance