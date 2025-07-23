export const mockData = {
  students: [
    {
      id: 1,
      name: "Alice Johnson",
      class: "10A",
      rollNumber: "001",
      attendance: 92,
      feeStatus: "paid" as const,
      performance: 85,
    },
    {
      id: 2,
      name: "Bob Smith",
      class: "10A",
      rollNumber: "002",
      attendance: 88,
      feeStatus: "pending" as const,
      performance: 78,
    },
    {
      id: 3,
      name: "Carol Davis",
      class: "10B",
      rollNumber: "003",
      attendance: 95,
      feeStatus: "paid" as const,
      performance: 92,
    },
    {
      id: 4,
      name: "David Wilson",
      class: "9A",
      rollNumber: "004",
      attendance: 82,
      feeStatus: "paid" as const,
      performance: 75,
    },
    {
      id: 5,
      name: "Emma Brown",
      class: "9B",
      rollNumber: "005",
      attendance: 90,
      feeStatus: "pending" as const,
      performance: 88,
    },
    {
      id: 6,
      name: "Frank Miller",
      class: "8A",
      rollNumber: "006",
      attendance: 85,
      feeStatus: "paid" as const,
      performance: 80,
    },
  ],

  teachers: [
    {
      id: 1,
      name: "Ms. Sarah Johnson",
      subject: "Mathematics",
      experience: 8,
      salary: 4500,
      performance: 94,
    },
    {
      id: 2,
      name: "Mr. John Davis",
      subject: "Physics",
      experience: 12,
      salary: 5200,
      performance: 91,
    },
    {
      id: 3,
      name: "Ms. Emily Wilson",
      subject: "English",
      experience: 6,
      salary: 4200,
      performance: 89,
    },
    {
      id: 4,
      name: "Mr. Michael Brown",
      subject: "Chemistry",
      experience: 10,
      salary: 4800,
      performance: 92,
    },
  ],

  teacherClasses: [
    {
      id: 1,
      name: "Class 10A",
      subject: "Mathematics",
      students: 32,
      nextClass: "Today 10:00 AM",
      room: "101",
    },
    {
      id: 2,
      name: "Class 10B",
      subject: "Mathematics",
      students: 28,
      nextClass: "Today 2:00 PM",
      room: "102",
    },
    {
      id: 3,
      name: "Class 9A",
      subject: "Algebra",
      students: 30,
      nextClass: "Tomorrow 9:00 AM",
      room: "103",
    },
  ],

  teacherTimetable: [
    {
      time: "9:00 AM",
      subject: "Mathematics",
      class: "Class 10A",
      room: "101",
      status: "completed" as const,
    },
    {
      time: "10:00 AM",
      subject: "Mathematics",
      class: "Class 10B",
      room: "102",
      status: "upcoming" as const,
    },
    {
      time: "11:00 AM",
      subject: "Free Period",
      class: "-",
      room: "-",
      status: "upcoming" as const,
    },
    {
      time: "2:00 PM",
      subject: "Algebra",
      class: "Class 9A",
      room: "103",
      status: "upcoming" as const,
    },
  ],

  studentGrades: [
    {
      subject: "Mathematics",
      marks: 92,
      grade: "A+",
    },
    {
      subject: "Physics",
      marks: 88,
      grade: "A",
    },
    {
      subject: "Chemistry",
      marks: 85,
      grade: "A",
    },
    {
      subject: "English",
      marks: 90,
      grade: "A+",
    },
    {
      subject: "Biology",
      marks: 82,
      grade: "B+",
    },
  ],

  galleryImages: [
    {
      id: 1,
      title: "Science Fair 2024",
      date: "March 15, 2024",
      category: "Events",
    },
    {
      id: 2,
      title: "Sports Day",
      date: "March 10, 2024",
      category: "Sports",
    },
    {
      id: 3,
      title: "Annual Function",
      date: "February 28, 2024",
      category: "Events",
    },
    {
      id: 4,
      title: "Art Exhibition",
      date: "February 20, 2024",
      category: "Arts",
    },
    {
      id: 5,
      title: "Field Trip",
      date: "February 15, 2024",
      category: "Educational",
    },
    {
      id: 6,
      title: "Cultural Program",
      date: "February 10, 2024",
      category: "Cultural",
    },
  ],

  recentActivities: [
    {
      title: "New Student Admission",
      description: "Emma Brown joined Class 9B",
      time: "2 hours ago",
    },
    {
      title: "Fee Payment Received",
      description: "Alice Johnson paid semester fee",
      time: "4 hours ago",
    },
    {
      title: "Teacher Leave Request",
      description: "Ms. Sarah Johnson requested leave for March 20",
      time: "6 hours ago",
    },
    {
      title: "Exam Results Published",
      description: "Mid-term exam results for Class 10 published",
      time: "1 day ago",
    },
    {
      title: "Parent Meeting Scheduled",
      description: "Parent-teacher meeting scheduled for March 25",
      time: "2 days ago",
    },
  ],

  paymentHistory: [
    {
      description: "Semester Fee - Spring 2024",
      amount: 2500,
      date: "January 15, 2024",
    },
    {
      description: "Library Fee",
      amount: 100,
      date: "January 10, 2024",
    },
    {
      description: "Lab Fee",
      amount: 200,
      date: "January 5, 2024",
    },
    {
      description: "Semester Fee - Fall 2023",
      amount: 2500,
      date: "August 15, 2023",
    },
  ],

  notifications: [
    {
      title: "Exam Schedule Released",
      message: "Mid-term examination schedule has been published. Please check your timetable.",
      time: "2 hours ago",
      type: "important" as const,
    },
    {
      title: "Library Books Due",
      message: "You have 2 library books due for return by March 20, 2024.",
      time: "1 day ago",
      type: "reminder" as const,
    },
    {
      title: "Parent-Teacher Meeting",
      message: "Parent-teacher meeting scheduled for March 25, 2024 at 2:00 PM.",
      time: "2 days ago",
      type: "info" as const,
    },
    {
      title: "Fee Payment Reminder",
      message: "Your semester fee payment is due by March 31, 2024.",
      time: "3 days ago",
      type: "important" as const,
    },
    {
      title: "Sports Day Registration",
      message: "Registration for annual sports day is now open. Register by March 15.",
      time: "1 week ago",
      type: "info" as const,
    },
  ],
}
