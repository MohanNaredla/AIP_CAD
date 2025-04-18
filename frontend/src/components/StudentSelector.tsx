import React from "react";
import { Student } from "@/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  students: Student[];
  selectedStudent: Student;
  onSelect: (s: Student) => void;
}

export const StudentSelector: React.FC<Props> = ({
  students,
  selectedStudent,
  onSelect,
}) => (
  <div className="flex items-center gap-3 mb-6">
    <div>
      <h2 className="text-2xl font-semibold">{selectedStudent.id}</h2>
      <p className="text-muted-foreground">{selectedStudent.grade}</p>
    </div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          Change Student
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {students.map((s) => (
          <DropdownMenuItem
            key={s.id}
            onClick={() => onSelect(s)}
            className="flex justify-between"
          >
            <span>{s.id}</span>
            <span className="text-xs text-muted-foreground">{s.grade}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);
