
// Mock student data for the dashboard
export interface Student {
  id: string;
  name: string;
  grade: string;
  avatar: string;
}

export interface AttendanceData {
  year: string;
  attendanceRate: number;
  absences: number;
  lates: number;
  excused: number;
  total: number;
}

export interface RiskCategory {
  level: 'Low' | 'Medium' | 'High';
  color: string;
  description: string;
}

// Mock students for the selector
export const students: Student[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    grade: '10th Grade',
    avatar: '👨‍🎓',
  },
  {
    id: '2',
    name: 'Emma Wilson',
    grade: '9th Grade',
    avatar: '👩‍🎓',
  },
  {
    id: '3',
    name: 'Michael Brown',
    grade: '11th Grade',
    avatar: '👨‍🎓',
  },
];

// Historical attendance data for the selected student
export const attendanceHistory: AttendanceData[] = [
  {
    year: '2020',
    attendanceRate: 97,
    absences: 6,
    lates: 3,
    excused: 4,
    total: 180,
  },
  {
    year: '2021',
    attendanceRate: 94,
    absences: 10,
    lates: 5,
    excused: 7,
    total: 180,
  },
  {
    year: '2022',
    attendanceRate: 92,
    absences: 14,
    lates: 8,
    excused: 5,
    total: 180,
  },
  {
    year: '2023',
    attendanceRate: 88,
    absences: 21,
    lates: 10,
    excused: 8,
    total: 180,
  },
];

// Predicted attendance for next year
export const predictedAttendance = {
  year: '2024',
  attendanceRate: 85,
  absences: 27,
  lates: 12,
  excused: 9,
  total: 180,
};

// Current risk assessment
export const riskAssessment: RiskCategory = {
  level: 'Medium',
  color: '#FFB547', // amber color
  description: 'Attendance is declining and may require intervention.',
};

// Attendance trend data including prediction
export const trendData = [
  { year: '2020', value: 97, isPredicted: false },
  { year: '2021', value: 94, isPredicted: false },
  { year: '2022', value: 92, isPredicted: false },
  { year: '2023', value: 88, isPredicted: false },
  { year: '2024', value: 85, isPredicted: true },
];
