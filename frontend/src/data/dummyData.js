const students = [
  {
    id: 1,
    name: "Aarav Patel",
    email: "aarav.patel@example.com",
    password: "password123",
    studentId: "CS2023001",
    department: "Computer Science",
    year: "3rd Year"
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    password: "password123",
    studentId: "ME2023045",
    department: "Mechanical Engineering",
    year: "3rd Year"
  },
  {
    id: 3,
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    password: "password123",
    studentId: "EC2023012",
    department: "Electronics",
    year: "2nd Year"
  },
  {
    id: 4,
    name: "Neha Gupta",
    email: "neha.gupta@example.com",
    password: "password123",
    studentId: "CS2023088",
    department: "Computer Science",
    year: "4th Year"
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    password: "password123",
    studentId: "IT2023056",
    department: "Information Technology",
    year: "1st Year"
  }
];

const exams = [
  {
    examId: 101,
    title: "Advanced Data Structures",
    subject: "Computer Science",
    duration: 120, // in minutes
    totalQuestions: 60,
    scheduledDate: "2024-06-15",
    scheduledTime: "10:00 AM",
    status: "upcoming",
    difficulty: "Hard"
  },
  {
    examId: 102,
    title: "Engineering Mathematics II",
    subject: "Mathematics",
    duration: 90,
    totalQuestions: 50,
    scheduledDate: "2024-05-20",
    scheduledTime: "02:00 PM",
    status: "completed",
    difficulty: "Medium"
  },
  {
    examId: 103,
    title: "Quantum Physics Fundamentals",
    subject: "Physics",
    duration: 180,
    totalQuestions: 100,
    scheduledDate: "2024-05-25",
    scheduledTime: "09:00 AM",
    status: "active",
    difficulty: "Hard"
  },
  {
    examId: 104,
    title: "Technical Communication",
    subject: "English",
    duration: 60,
    totalQuestions: 40,
    scheduledDate: "2024-06-05",
    scheduledTime: "11:30 AM",
    status: "upcoming",
    difficulty: "Easy"
  },
  {
    examId: 105,
    title: "Organic Chemistry Principles",
    subject: "Chemistry",
    duration: 120,
    totalQuestions: 75,
    scheduledDate: "2024-05-18",
    scheduledTime: "01:00 PM",
    status: "completed",
    difficulty: "Medium"
  }
];

const results = [
  {
    resultId: 501,
    studentId: "CS2023001",
    examId: 102,
    examTitle: "Engineering Mathematics II",
    score: 42,
    totalMarks: 50,
    percentage: 84,
    grade: "A",
    timeTaken: "85 minutes",
    submittedAt: "2024-05-20T15:25:00Z",
    passed: true
  },
  {
    resultId: 502,
    studentId: "ME2023045",
    examId: 102,
    examTitle: "Engineering Mathematics II",
    score: 28,
    totalMarks: 50,
    percentage: 56,
    grade: "C",
    timeTaken: "90 minutes",
    submittedAt: "2024-05-20T15:30:00Z",
    passed: true
  },
  {
    resultId: 503,
    studentId: "CS2023088",
    examId: 105,
    examTitle: "Organic Chemistry Principles",
    score: 15,
    totalMarks: 75,
    percentage: 20,
    grade: "F",
    timeTaken: "110 minutes",
    submittedAt: "2024-05-18T14:50:00Z",
    passed: false
  }
];

export { students, exams, results };
