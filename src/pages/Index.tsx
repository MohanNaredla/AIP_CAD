
import React, { useState } from 'react';
import { 
  students, 
  attendanceHistory, 
  predictedAttendance, 
  riskAssessment, 
  trendData 
} from '@/data/mockData';
import { StudentSelector } from '@/components/StudentSelector';
import { AttendanceMetrics } from '@/components/AttendanceMetrics';
import { AttendanceTrend } from '@/components/AttendanceTrend';
import { RiskIndicator } from '@/components/RiskIndicator';
import { AttendanceHistory } from '@/components/AttendanceHistory';

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
        
        <AttendanceMetrics 
          currentYear={currentYear} 
          previousYear={previousYear} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2">
            <AttendanceTrend data={trendData} />
          </div>
          <div>
            <RiskIndicator risk={riskAssessment} />
          </div>
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
