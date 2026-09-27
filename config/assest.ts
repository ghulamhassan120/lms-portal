import { CheckCircle2, Clock } from "lucide-react";

 export const schedule = [
  { day: "Sun", date: "13", active: false },
  { day: "Mon", date: "14", active: true },
  { day: "Tue", date: "15", active: false },
  { day: "Wed", date: "16", active: true },
  { day: "Thu", date: "17", active: false },
  { day: "Fri", date: "18", active: true },
  { day: "Sat", date: "19", active: false },
];


export const classDays = [
  "Mon 01:00 PM - 03:00 PM",
  "Wed 01:00 PM - 03:00 PM",
  "Fri 01:00 PM - 03:00 PM",
];



export const assignmentRecords = [
  {
    title: "Admin panel (E commerce Dashboard)",
    topics: "7 Topics",
    dueDate: "September 10, 2026",
    status: "APPROVED",
    statusType: "approved",
    isHackathon: false,
    actionState: "active"
  },
  {
    title: "QUICKSERVE WMA (Batch-20)",
    topics: "No topics",
    dueDate: "August 29, 2026",
    status: "NOT SUBMITTED",
    statusType: "not-submitted",
    isHackathon: true,
    actionState: "closed"
  },
  {
    title: "E-Commerce Website (React js)",
    topics: "4 Topics",
    dueDate: "August 17, 2026",
    status: "APPROVED",
    statusType: "approved",
    isHackathon: false,
    actionState: "active"
  },
  {
    title: "Furniture E-Commerce Website",
    topics: "5 Topics",
    dueDate: "August 10, 2026",
    status: "SUBMITTED",
    statusType: "submitted",
    isHackathon: false,
    actionState: "active"
  },
  {
    title: "MaintainIQ (Batch-20)",
    topics: "No topics",
    dueDate: "July 11, 2026",
    status: "NOT SUBMITTED",
    statusType: "not-submitted",
    isHackathon: true,
    actionState: "closed"
  },
];


export const progressTopics = [
  {
    id: 1,
    title: "Web Designing",
    topics: "20/20",
    percentage: "100%",
    status: "completed",
    icon: CheckCircle2,
    iconColor: "text-[#00c98b]",
    topicsList: [
      {
        title: "HTML Text",
        completedDate: "Completed: Dec 15, 2025",
        subItems: ["Furniture E-Commerce Website", "Amazon Clone", "NASA Landing Page", "Landing Page Assignment"]
      },
      {
        title: "HTML Images",
        completedDate: "Completed: May 6, 2026",
        subItems: ["Furniture E-Commerce Website", "Amazon Clone", "NASA Landing Page", "Landing Page Assignment"]
      },
      {
        title: "HTML Table",
        completedDate: "Completed: May 6, 2026",
        subItems: ["Budgetting App"]
      },
      {
        title: "HTML Forms",
        completedDate: "Completed: May 6, 2026",
        subItems: ["Budgetting App","Landing Page Assignment"]
      },
      {
    title: "HTML Audio/Video Tags",
    completedDate: "Completed: May 6, 2026",
    subItems: ["NASA Landing Page"]
  },
  {
    title: "HTML Links",
    completedDate: "Completed: May 6, 2026",
    subItems: ["Amazon Clone"]
  },
  {
    title: "Grid system",
    completedDate: "Completed: Feb 12, 2026",
    subItems: [
      "Amazon Clone",
      "Landing Page Assignment",
      "Grid Assignment no 2",
      "Grid Assignment no 1"
    ]
  },
  {
    title: "Font Awesome",
    completedDate: "Completed: Feb 13, 2026",
    subItems: [
      "Budgetting App",
      "Amazon Clone",
      "Landing Page Assignment"
    ]
  },
  {
    title: "Bootstrap",
    completedDate: "Completed: Feb 16, 2026",
    subItems: ["Amazon Clone"]
  },
  {
    title: "Css3",
    completedDate: "Completed: Dec 15, 2025",
    subItems: [
      "Furniture E-Commerce Website",
      "Amazon Clone",
      "NASA Landing Page",
      "Landing Page Assignment"
    ]
  },
  {
    title: "Google Fonts",
    completedDate: "Completed: Feb 12, 2026",
    subItems: [
      "Amazon Clone",
      "NASA Landing Page",
      "Landing Page Assignment"
    ]
  },
  {
    title: "CSS Variables",
    completedDate: "Completed: Feb 12, 2026",
    subItems: []
  },
  {
    title: "Netlify Hosting",
    completedDate: "Completed: Feb 10, 2026",
    subItems: []
  },
  {
    title: "Github",
    completedDate: "Completed: Feb 10, 2026",
    subItems: [
      "Furniture E-Commerce Website",
      "Budgetting App",
      "Amazon Clone",
      "NASA Landing Page",
      "Landing Page Assignment"
    ]
  },
  {
    title: "Github Hosting",
    completedDate: "Completed: Feb 10, 2026",
    subItems: [
      "Budgetting App",
      "Amazon Clone",
      "NASA Landing Page",
      "Landing Page Assignment"
    ]
  },
  {
    title: "CSS Animations",
    completedDate: "Completed: Feb 13, 2026",
    subItems: ["Amazon Clone"]
  },
  {
    title: "Media queries",
    completedDate: "Completed: Feb 16, 2026",
    subItems: [
      "Amazon Clone",
      "NASA Landing Page",
      "Landing Page Assignment"
    ]
  },
  {
    title: "Surge hosting",
    completedDate: "Completed: Feb 10, 2026",
    subItems: ["Amazon Clone"]
  },
  {
    title: "Domain & Hosing Subscription (Deployment)",
    completedDate: "Completed: Feb 18, 2026",
    subItems: []
  },
  {
    title: "Flex box",
    completedDate: "Completed: Feb 5, 2026",
    subItems: [
      "Budgetting App",
      "Amazon Clone",
      "NASA Landing Page",
      "Landing Page Assignment"
    ]
  }
    ]
  },
  {
    id: 2,
    title: "Front-End Development",
    topics: "27/31",
    percentage: "87%",
    status: "pending",
    icon: Clock,
    iconColor: "text-[#f59e0b]",
    topicsList: [
    {
    title: "JavaScript Introduction",
    completedDate: "Completed: Feb 21, 2026",
    subItems: ["JavaScript Assignment – 25 Questions"]
  },
  {
    title: "JavaScript Chapter 1 - 10",
    completedDate: "Completed: Mar 3, 2026",
    subItems: [
      "JavaScript Assignment – 25 Questions",
      "Budgetting App"
    ]
  },
  {
    title: "JavaScript Chapter 11 - 20",
    completedDate: "Completed: Apr 6, 2026",
    subItems: [
      "JavaScript Assignment – 25 Questions",
      "Budgetting App"
    ]
  },
  {
    title: "JavaScript Quiz 1",
    completedDate: "Completed: Apr 19, 2026",
    subItems: []
  },
  {
    title: "JavaScript Chapter 21 - 30",
    completedDate: "Completed: May 3, 2026",
    subItems: [
      "JavaScript Assignment – 25 Questions",
      "Budgetting App"
    ]
  },
  {
    title: "JavaScript Chapter 31 - 40",
    completedDate: "Completed: May 4, 2026",
    subItems: [
      "JavaScript Assignment – 25 Questions",
      "Budgetting App"
    ]
  },
  {
    title: "JavaScript Quiz 2",
    completedDate: "Completed: May 18, 2026",
    subItems: []
  },
  {
    title: "JavaScript Chapter 41 - 50",
    completedDate: "Completed: May 11, 2026",
    subItems: [
      "JavaScript Assignment – 25 Questions",
      "Budgetting App",
      "Amazon Clone"
    ]
  },
  {
    title: "JavaScript Chapter 51 - 60",
    completedDate: "Completed: May 20, 2026",
    subItems: [
      "JavaScript Assignment – 25 Questions",
      "Budgetting App"
    ]
  },
  {
    title: "JavaScript Quiz 3",
    completedDate: "Completed: Jun 3, 2026",
    subItems: []
  },
  {
    title: "JavaScript Book Completed",
    completedDate: "Completed: Jun 11, 2026",
    subItems: [
      "Furniture E-Commerce Website",
      "JavaScript Assignment – 25 Questions"
    ]
  },
  {
    title: "JavaScript Quiz 4",
    completedDate: "Completed: Jun 27, 2026",
    subItems: []
  },
  {
    title: "Var vs Let vs Const",
    completedDate: "Completed: Jun 12, 2026",
    subItems: []
  },
  {
    title: "Template Literals",
    completedDate: "Completed: Jun 20, 2026",
    subItems: []
  },
  {
    title: "Arrow Functions",
    completedDate: "Completed: Jun 15, 2026",
    subItems: []
  },
  {
    title: "Iterators & For..of",
    completedDate: "Completed: Jul 19, 2026",
    subItems: []
  },
  {
    title: "Array Advance Methods",
    completedDate: "Completed: Jul 19, 2026",
    subItems: []
  },
  {
    title: "JavaScript Behind the Scenes",
    completedDate: "Completed: Aug 11, 2026",
    subItems: []
  },
  {
    title: "Destructuring, Rest & Spread Operators",
    completedDate: "Completed: Jun 17, 2026",
    subItems: []
  },
  {
    title: "SET, MAP",
    completedDate: "Completed: Jul 12, 2026",
    subItems: []
  },
  {
    title: "Default Parameters",
    completedDate: "Completed: Jun 17, 2026",
    subItems: []
  },
  {
    title: "First-Class and Higher-Order Functions",
    completedDate: "Completed: Sep 5, 2026",
    subItems: []
  },
  {
    title: "CallBack Functions",
    completedDate: "Completed: Jul 4, 2026",
    subItems: []
  },
  {
    title: "Call, Apply, Bind",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Closures",
    completedDate: "Completed: Jul 12, 2026",
    subItems: []
  },
  {
    title: "OOP with JavaScript",
    completedDate: "Completed: Jul 6, 2026",
    subItems: []
  },
  {
    title: "Asynchronous JavaScript",
    completedDate: "Completed: 3 days ago",
    subItems: []
  },
  {
    title: "TypeScript",
    completedDate: "Completed: Jul 28, 2026",
    subItems: []
  },
  {
    title: "Advance Github",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "GSAP Animations",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Supabase or Firebase",
    completedDate: "Not Completed",
    subItems: []
  }
    ]
  },
  {
    id: 3,
    title: "Modern Front-End Development",
    topics: "10/14",
    percentage: "71%",
    status: "pending",
    icon: Clock,
    iconColor: "text-[#f59e0b]",
    topicsList: [
      {
    title: "ReactJS Introduction & How to Create React Project",
    completedDate: "Completed: Aug 6, 2026",
    subItems: [
      "Admin panel (E commerce Dashboad)",
      "E-Commerce Website (React js)"
    ]
  },
  {
    title: "Components , Props and JSX",
    completedDate: "Completed: Aug 6, 2026",
    subItems: [
      "Admin panel (E commerce Dashboad)",
      "E-Commerce Website (React js)"
    ]
  },
  {
    title: "State, Events, Forms",
    completedDate: "Completed: Aug 23, 2026",
    subItems: [
      "Admin panel (E commerce Dashboad)"
    ]
  },
  {
    title: "React in Depth and Behind the Scenes (Components , Composition, Re-useability)",
    completedDate: "Completed: Aug 17, 2026",
    subItems: []
  },
  {
    title: "Effects and Data Fetching in React",
    completedDate: "Completed: Aug 11, 2026",
    subItems: [
      "E-Commerce Website (React js)"
    ]
  },
  {
    title: "Custom Hooks, Ref, useReducer etc",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Class-based React (Optional - not necessary)",
    completedDate: "Completed: Sep 5, 2026",
    subItems: []
  },
  {
    title: "Single Page Application (SPA) - React Router DOM",
    completedDate: "Completed: Aug 11, 2026",
    subItems: [
      "Admin panel (E commerce Dashboad)"
    ]
  },
  {
    title: "State Management - Context Api",
    completedDate: "Completed: Sep 5, 2026",
    subItems: [
      "Admin panel (E commerce Dashboad)"
    ]
  },
  {
    title: "Performance Optimization",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Redux & Redux ToolKit with Thunk",
    completedDate: "Completed: Sep 8, 2026",
    subItems: []
  },
  {
    title: "Tailwind, Material UI, Styled Components OverView",
    completedDate: "Not Completed",
    subItems: [
      "Admin panel (E commerce Dashboad)"
    ]
  },
  {
    title: "FrontEnd Deployment through Vercel",
    completedDate: "Completed: Aug 23, 2026",
    subItems: [
      "E-Commerce Website (React js)"
    ]
  },
  {
    title: "NextJS",
    completedDate: "Not Completed",
    subItems: [
      "Admin panel (E commerce Dashboad)"
    ]
  }
    ]
  },
  {
    id: 4,
    title: "Back-End Development",
    topics: "0/16",
    percentage: "0%",
    status: "pending",
    icon: Clock,
    iconColor: "text-[#f59e0b]",
    topicsList: [
      {
    title: "NodeJS",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "ExpressJS",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "MongoDB",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Security and Authentication",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Multer - Media Uploading",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Sockets",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "GraphQL",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "PostGresSQL",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Sequelize",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Payment Integration",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Scalable System - Caching",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Scalable System - Messaging Queues",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "CI / CD",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Node Production and Cloud Deployment",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "NodeJS Optimization",
    completedDate: "Not Completed",
    subItems: []
  },
  {
    title: "Dockers - Containterization",
    completedDate: "Not Completed",
    subItems: []
  }
    ]
  },
];


export const months = [
  "Jan 2026", "Feb 2026", "Mar 2026", "Apr 2026", 
  "May 2026", "Jun 2026", "Jul 2026", "Aug 2026", "Sep 2026"
];

export const attendanceRecords = [
  { classNo: 1, date: "Tue, Sep 1, 2026", status: "ABSENT" },
{ classNo: 2, date: "Thu, Sep 3, 2026", status: "PRESENT" },
{ classNo: 3, date: "Sun, Sep 6, 2026", status: "ABSENT" },
{ classNo: 4, date: "Tue, Sep 8, 2026", status: "PRESENT" },
{ classNo: 5, date: "Thu, Sep 10, 2026", status: "ABSENT" },
{ classNo: 6, date: "Sun, Sep 13, 2026", status: "PRESENT" },
{ classNo: 7, date: "Tue, Sep 15, 2026", status: "PRESENT" },
{ classNo: 8, date: "Thu, Sep 17, 2026", status: "ABSENT" },
{ classNo: 9, date: "Sun, Sep 20, 2026", status: "PRESENT" },
{ classNo: 10, date: "Tue, Sep 22, 2026", status: "ABSENT" },
];



export const feeRecords = [
  { month: "Feb 2026", amount: "Rs: 1000 /-+", type: "Monthly", dueDate: "19-Feb-2026", voucherId: "202602525239", status: "PENDING" },
  { month: "Feb 2026", amount: "Rs: 1000 /-+", type: "Monthly", dueDate: "19-Feb-2026", voucherId: "202602525239", status: "PENDING" },
  { month: "Feb 2026", amount: "Rs: 1000 /-+", type: "Monthly", dueDate: "19-Feb-2026", voucherId: "202602525239", status: "PENDING" },
  { month: "Feb 2026", amount: "Rs: 1000 /-+", type: "Monthly", dueDate: "19-Feb-2026", voucherId: "202602525239", status: "PENDING" },
  { month: "Nov 2025", amount: "Rs: 1000 /-+", type: "Monthly", dueDate: "08-Nov-2025", voucherId: "202511525239", status: "PENDING" },
];


export const quizRecords = [
  {
    title: "Javascript (Quiz-4)",
    module: "Modern Front-End Development",
    questions: "40",
    attempts: "1 / 3",
    percentage: "70%",
    status: "PASSED",
    note: "—",
    action: "Completed"
  },
  {
    title: "Javascript (Quiz-3)",
    module: "Modern Front-End Development",
    questions: "40",
    attempts: "3 / 3",
    percentage: "73%",
    status: "PASSED",
    note: "—",
    action: "Completed"
  },
  {
    title: "Javascript (Quiz-2)",
    module: "Modern Front-End Development",
    questions: "40",
    attempts: "1 / 3",
    percentage: "90%",
    status: "PASSED",
    note: "—",
    action: "Completed"
  },
  {
    title: "Javascript (Quiz-1)",
    module: "Modern Front-End Development",
    questions: "40",
    attempts: "1 / 3",
    percentage: "88%",
    status: "PASSED",
    note: "—",
    action: "Completed"
  },
];


// Mock Data for Students Tab[cite: 6]
  export const students = [
    { name: "Ghulam Hassan", roll: "525239", email: "ghulam@example.com", status: "ENROLLED" },
    { name: "Ali Khan", roll: "525240", email: "ali@example.com", status: "ENROLLED" },
    { name: "Ayesha Ahmed", roll: "525241", email: "ayesha@example.com", status: "ENROLLED" },
    { name: "Bilal Raza", roll: "525242", email: "bilal@example.com", status: "ENROLLED" },
  ];

  export const modules = [
    { name: "Web Designing", topics: "20/20", percentage: 100, completed: true },
    { name: "Front-End Development", topics: "26/31", percentage: 84, completed: false },
    { name: "Modern Front-End Development", topics: "10/14", percentage: 71, completed: false },
    { name: "Back-End Development", topics: "0/16", percentage: 0, completed: false },
  ];
  // Mock Data for Assignments Tab[cite: 4]
  export const assignments = [
    { title: "Admin panel (E-commerce Dashboard)", desc: "Create the provided UI design in React or Next.js...", topics: "7 Topics", dueDate: "Sep 10, 2026", isHackathon: false },
    { title: "QUICKSERVE WMA (Batch-20)", desc: "Challenge: Build a modern service-booking web application...", topics: "No topics", dueDate: "Aug 30, 2026", isHackathon: true },
    { title: "E-Commerce Website (React js)", desc: "React js frontend. Create all required e-commerce...", topics: "4 Topics", dueDate: "Aug 17, 2026", isHackathon: false },
  ];

  // Mock Data for Quizzes Tab[cite: 5]
  export const quizzes = [
    { title: "Javascript (Quiz-4)", course: "Modern Web Application Development", date: "Jun 24, 2026", expiry: "Jun 24, 2026", status: "ACTIVE" },
    { title: "Javascript (Quiz-3)", course: "Modern Web Application Development", date: "Jun 3, 2026", expiry: "Jun 3, 2026", status: "ACTIVE" },
    { title: "CSS Quiz", course: "Modern Web Application Development, Web and Mobile App Development", date: "Mar 27, 2026", expiry: "Mar 27, 2026", status: "ACTIVE" },
  ];
