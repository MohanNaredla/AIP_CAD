
import React from 'react';
import { AttendanceData } from '@/data/mockData';
import { CalendarCheck2, CalendarX2, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AttendanceMetricsProps {
  currentYear: AttendanceData;
  previousYear: AttendanceData;
}

export const AttendanceMetrics: React.FC<AttendanceMetricsProps> = ({
  currentYear,
  previousYear,
}) => {
  const attendanceChange = currentYear.attendanceRate - previousYear.attendanceRate;
  const isPositiveChange = attendanceChange >= 0;

  return (
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
            <div className={`text-sm ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
              {isPositiveChange ? '↑' : '↓'} {Math.abs(attendanceChange)}%
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Compared to {previousYear.year}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Absences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline justify-between">
            <div className="flex items-center">
              <CalendarX2 className="h-5 w-5 text-red-400 mr-2" />
              <div className="text-2xl font-bold">{currentYear.absences}</div>
            </div>
            <div className="text-xs">
              <span className="font-medium">{currentYear.excused}</span> excused
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {((currentYear.absences / currentYear.total) * 100).toFixed(1)}% of school days
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Late Arrivals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline justify-between">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-amber-400 mr-2" />
              <div className="text-2xl font-bold">{currentYear.lates}</div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {((currentYear.lates / currentYear.total) * 100).toFixed(1)}% of school days
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
