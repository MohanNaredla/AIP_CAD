
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';

interface TrendDataPoint {
  year: string;
  value: number;
  isPredicted: boolean;
}

interface AttendanceTrendProps {
  data: TrendDataPoint[];
}

export const AttendanceTrend: React.FC<AttendanceTrendProps> = ({ data }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Attendance Trend</CardTitle>
        <CardDescription>Historical attendance with prediction for 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="year" />
              <YAxis domain={[75, 100]} tickFormatter={(tick) => `${tick}%`} />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Attendance Rate']}
                labelFormatter={(label) => `Year: ${label}`}
              />
              <ReferenceLine y={90} stroke="#FF8A65" strokeDasharray="3 3" />
              <Line
                type="monotone"
                dataKey="value"
                name="Attendance Rate"
                stroke="#4CAF50"
                strokeWidth={2}
                dot={{
                  stroke: 'var(--background)',
                  strokeWidth: 2,
                  fill: (dataPoint) => dataPoint.isPredicted ? "#FFB547" : "#4CAF50",
                  r: 5
                }}
                activeDot={{ r: 8, fill: (dataPoint) => dataPoint.isPredicted ? "#FFB547" : "#4CAF50" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
