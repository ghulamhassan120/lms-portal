import { 
  LayoutDashboard, 
  BookOpen, 
  CalendarCheck, 
  CreditCard, 
  FileText, 
  Award, 
  Clock, 
  GraduationCap 
} from 'lucide-react'; // icons ke liye (npm i lucide-react kar lena)

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-white flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#12151c] border-r border-gray-800 flex flex-col justify-between hidden md:flex">
        <div>
          {/* Logo Area */}
          <div className="p-6 flex items-center justify-between border-b border-gray-800">
            <span className="font-bold text-xl text-blue-400">SMIT</span>
            <span className="text-gray-500 text-xs">v1.0</span>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-600/10 text-blue-400 rounded-xl font-medium text-sm border border-blue-500/20">
              <LayoutDashboard size={18} /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800/50 hover:text-white rounded-xl transition text-sm">
              <BookOpen size={18} /> Progress
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800/50 hover:text-white rounded-xl transition text-sm">
              <CalendarCheck size={18} /> Attendance
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800/50 hover:text-white rounded-xl transition text-sm">
              <CreditCard size={18} /> Payment
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800/50 hover:text-white rounded-xl transition text-sm">
              <FileText size={18} /> Assignment
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800/50 hover:text-white rounded-xl transition text-sm">
              <Award size={18} /> Quiz
            </a>
          </nav>
        </div>

        {/* User Profile Footer in Sidebar */}
        <div className="p-4 border-t border-gray-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-sm">
            GH
          </div>
          <div>
            <h4 className="text-sm font-semibold">Ghulam Hassan</h4>
            <p className="text-xs text-gray-500">Student</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-xs text-gray-500">Home &gt; <span className="text-gray-300">Modern Web Application Development</span></p>
          </div>
          <button className="bg-[#161922] border border-gray-800 text-xs px-4 py-2 rounded-xl text-gray-300 hover:bg-gray-800 transition">
            Feedback
          </button>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Attendance Card */}
          <div className="bg-[#161922] border border-gray-800 rounded-2xl p-5 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">60/126</h2>
              <p className="text-xs text-gray-400 mt-1">Attendance</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Clock size={20} />
            </div>
          </div>

          {/* Assignment Card */}
          <div className="bg-[#161922] border border-gray-800 rounded-2xl p-5 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">9/13</h2>
              <p className="text-xs text-gray-400 mt-1">Assignment</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <GraduationCap size={20} />
            </div>
          </div>

          {/* Schedule Widget Preview */}
          <div className="bg-[#161922] border border-gray-800 rounded-2xl p-5">
            <h3 className="text-sm font-semibold mb-3">Class Schedule</h3>
            <div className="flex gap-2 text-xs">
              <span className="px-2.5 py-1.5 bg-emerald-500 text-black font-bold rounded-lg">Mon 07</span>
              <span className="px-2.5 py-1.5 bg-gray-800 text-gray-400 rounded-lg">Tue 08</span>
              <span className="px-2.5 py-1.5 bg-emerald-500 text-black font-bold rounded-lg">Wed 09</span>
              <span className="px-2.5 py-1.5 bg-emerald-500 text-black font-bold rounded-lg">Fri 11</span>
            </div>
          </div>
        </div>

        {/* Active Course Section */}
        <div className="bg-[#161922] border border-gray-800 rounded-2xl p-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-white">Modern Web Application Development</h2>
            </div>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-bold rounded-full">
              ENROLLED
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mb-6 text-xs text-gray-300">
            <span className="bg-[#101218] px-3 py-1.5 rounded-lg border border-gray-800">Mon 01:00 PM - 03:00 PM</span>
            <span className="bg-[#101218] px-3 py-1.5 rounded-lg border border-gray-800">Wed 01:00 PM - 03:00 PM</span>
            <span className="bg-[#101218] px-3 py-1.5 rounded-lg border border-gray-800">Fri 01:00 PM - 03:00 PM</span>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-gray-400">Progress</span>
              <span className="text-emerald-400 font-semibold">73% Completed</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full" style={{ width: '73%' }}></div>
            </div>
          </div>

          {/* Batch & Roll Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-800 text-xs">
            <div>
              <p className="text-gray-500">Batch</p>
              <p className="font-semibold text-gray-200 mt-0.5">20</p>
            </div>
            <div>
              <p className="text-gray-500">Roll</p>
              <p className="font-semibold text-gray-200 mt-0.5">525239</p>
            </div>
            <div>
              <p className="text-gray-500">Campus</p>
              <p className="font-semibold text-gray-200 mt-0.5">Zaitoon Ashraf IT Park</p>
            </div>
            <div>
              <p className="text-gray-500">City</p>
              <p className="font-semibold text-gray-200 mt-0.5">Karachi</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}