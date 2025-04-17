
import React, { useState } from 'react';
import { 
  students, 
  attendanceHistory, 
  predictedAttendance, 
  riskAssessment, 
  trendData 
} from '@/data/mockData';
import { StudentSelector } from '@/components/StudentSelector';
import { AttendanceTrend } from '@/components/AttendanceTrend';
import { RiskIndicator } from '@/components/RiskIndicator';
import { AttendanceHistory } from '@/components/AttendanceHistory';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarCheck2 } from 'lucide-react';

const Index = () => {
  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  
  const currentYear = attendanceHistory[attendanceHistory.length - 1];
  const previousYear = attendanceHistory[attendanceHistory.length - 2];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container px-4 py-8 mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Student Attendance Dashboard</h1>
          <p className="text-muted-foreground">
            Track and analyze attendance patterns to identify at-risk students
          </p>
        </div>
        
        <StudentSelector 
          selectedStudent={selectedStudent} 
          onSelectStudent={setSelectedStudent} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Attendance Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="flex items-center">
                  <CalendarCheck2 className="h-5 w-5 text-green-500 mr-2" />
                  <div className="text-2xl font-bold">{currentYear.attendanceRate}%</div>
                </div>
                <div className={`text-sm ${currentYear.attendanceRate - previousYear.attendanceRate >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {currentYear.attendanceRate - previousYear.attendanceRate >= 0 ? '↑' : '↓'} {Math.abs(currentYear.attendanceRate - previousYear.attendanceRate)}%
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Compared to {previousYear.year}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <RiskIndicator risk={riskAssessment} compact={true} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Predicted Attendance (2024)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="flex items-center">
                  <CalendarCheck2 className="h-5 w-5 text-amber-500 mr-2" />
                  <div className="text-2xl font-bold">{predictedAttendance.attendanceRate}%</div>
                </div>
                <div className={`text-sm ${predictedAttendance.attendanceRate - currentYear.attendanceRate >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {predictedAttendance.attendanceRate - currentYear.attendanceRate >= 0 ? '↑' : '↓'} {Math.abs(predictedAttendance.attendanceRate - currentYear.attendanceRate)}%
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Compared to {currentYear.year}</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-6">
          <AttendanceTrend data={trendData} />
        </div>
        
        <AttendanceHistory 
          history={attendanceHistory} 
          predicted={predictedAttendance} 
        />
      </div>
    </div>
  );
};

export default Index;
