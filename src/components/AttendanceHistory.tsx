
import React from 'react';
import { AttendanceData } from '@/data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';

interface AttendanceHistoryProps {
  history: AttendanceData[];
  predicted: AttendanceData;
}

export const AttendanceHistory: React.FC<AttendanceHistoryProps> = ({ history, predicted }) => {
  const allData = [...history, { ...predicted, isPredicted: true }];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Year-by-Year Breakdown</CardTitle>
        <CardDescription>Detailed attendance metrics by school year</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Year</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead>Absences</TableHead>
              <TableHead>Lates</TableHead>
              <TableHead>Excused</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allData.map((year) => (
              <TableRow key={year.year} className={year.isPredicted ? 'bg-amber-50/20' : ''}>
                <TableCell className="font-medium">
                  {year.year}
                  {year.isPredicted && <span className="ml-1 text-xs text-amber-500">(Predicted)</span>}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between text-sm">
                      <span>{year.attendanceRate}%</span>
                    </div>
                    <Progress
                      value={year.attendanceRate}
                      className="h-2"
                      indicatorClassName={`${
                        year.attendanceRate >= 95
                          ? 'bg-green-500'
                          : year.attendanceRate >= 90
                          ? 'bg-green-400'
                          : year.attendanceRate >= 85
                          ? 'bg-amber-400'
                          : 'bg-red-400'
                      }`}
                    />
                  </div>
                </TableCell>
                <TableCell>{year.absences}</TableCell>
                <TableCell>{year.lates}</TableCell>
                <TableCell>{year.excused}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
