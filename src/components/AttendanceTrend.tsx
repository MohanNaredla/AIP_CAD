
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';

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
              <Legend />
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
        <div className="flex mt-2 text-xs text-muted-foreground justify-between">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#4CAF50]"></div>
            <span>Historical Data</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#FFB547]"></div>
            <span>Predicted Value</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 border-t border-[#FF8A65] border-dashed"></div>
            <span>90% Threshold</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
