
// Update the AttendanceData interface to include isPredicted
export interface AttendanceData {
  year: string;
  attendanceRate: number;
  absences: number;
  lates: number;
  excused: number;
  total: number;
  isPredicted?: boolean;
}
