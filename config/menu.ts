import { BookOpen, CalendarCheck, ClipboardCheck, FileText, LayoutDashboard, WalletCards } from "lucide-react";

export const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard/student",
  },
  {
    label: "Progress",
    icon: BookOpen,
     path: "/dashboard/student/progress",
  },
  {
    label: "Attendance",
    icon: CalendarCheck,
     path: "/dashboard/student/attendance",
  },
  {
    label: "Payment",
    icon: WalletCards,
     path: "/dashboard/student/payment",
  },
  {
    label: "Assignment",
    icon: FileText,
     path: "/dashboard/student/assignment",
  },
  {
    label: "Quiz",
    icon: ClipboardCheck,
     path: "/dashboard/student/quiz",
  },
];
