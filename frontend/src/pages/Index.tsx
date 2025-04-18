import React, { useEffect, useState } from "react";
import { Student, AttendanceData, RiskCategory } from "@/types";
import { StudentSelector } from "@/components/StudentSelector";
import { AttendanceTrend } from "@/components/AttendanceTrend";
import { RiskIndicator } from "@/components/RiskIndicator";
import { AttendanceHistory } from "@/components/AttendanceHistory";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CalendarCheck2 } from "lucide-react";

const API = "http://localhost:8000";

const Index: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [selected, setSelected] = useState<Student | null>(null);
  const [history, setHistory] = useState<AttendanceData[]>([]);
  const [pred, setPred] = useState<AttendanceData | null>(null);
  const [risk, setRisk] = useState<RiskCategory | null>(null);
  const [trend, setTrend] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API}/students`)
      .then((r) => r.json())
      .then((d) => {
        setStudents(d);
        setSelected(d[0]);
      });
  }, []);

  useEffect(() => {
    if (!selected) return;
    const id = selected.id;
    fetch(`${API}/students/${id}/details`)
      .then((r) => r.json())
      .then((d) => {
        setRisk(d.risk);
        setPred(d.predictedAttendance);
      });
    fetch(`${API}/students/${id}/metrics`)
      .then((r) => r.json())
      .then(setHistory);
    fetch(`${API}/students/${id}/trend`)
      .then((r) => r.json())
      .then(setTrend);
  }, [selected]);

  const prev = history[history.length - 2] ?? null;
  const curr = history[history.length - 1] ?? null;

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-bold mb-1">
          Student Attendance Dashboard
        </h1>
        <p className="text-muted-foreground mb-8">
          Track and analyze attendance patterns
        </p>

        {selected && (
          <StudentSelector
            students={students}
            selectedStudent={selected}
            onSelect={setSelected}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Attendance Rate */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">
                Attendance Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="flex items-center">
                  <CalendarCheck2 className="h-5 w-5 text-green-500 mr-2" />
                  <div className="text-2xl font-bold">
                    {curr ? `${curr.attendanceRate}%` : "--"}
                  </div>
                </div>
                <div className="text-sm">
                  {curr && prev
                    ? `${
                        curr.attendanceRate - prev.attendanceRate >= 0
                          ? "↑"
                          : "↓"
                      }${Math.abs(curr.attendanceRate - prev.attendanceRate)}%`
                    : "N/A"}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {prev ? `Compared to ${prev.year}` : "No previous data"}
              </p>
            </CardContent>
          </Card>

          {/* Risk Assessment */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">
                Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              {risk ? <RiskIndicator risk={risk} compact /> : "Loading..."}
            </CardContent>
          </Card>

          {/* Predicted Attendance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">
                Predicted Attendance (2025)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="flex items-center">
                  <CalendarCheck2 className="h-5 w-5 text-amber-500 mr-2" />
                  <div className="text-2xl font-bold">
                    {pred ? `${pred.attendanceRate}%` : "--"}
                  </div>
                </div>
                <div className="text-sm">
                  {pred && curr
                    ? `${
                        pred.attendanceRate - curr.attendanceRate >= 0
                          ? "↑"
                          : "↓"
                      }${Math.abs(pred.attendanceRate - curr.attendanceRate)}%`
                    : "N/A"}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {curr ? `Compared to ${curr.year}` : ""}
              </p>
            </CardContent>
          </Card>
        </div>

        <AttendanceTrend data={trend} />
        {curr && pred && (
          <AttendanceHistory history={history} predicted={pred} />
        )}
      </div>
    </div>
  );
};

export default Index;
