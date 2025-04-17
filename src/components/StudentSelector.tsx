
import React from 'react';
import { students, Student } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface StudentSelectorProps {
  selectedStudent: Student;
  onSelectStudent: (student: Student) => void;
}

export const StudentSelector: React.FC<StudentSelectorProps> = ({
  selectedStudent,
  onSelectStudent,
}) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div>
        <h2 className="text-2xl font-semibold">Student #{selectedStudent.id}</h2>
        <p className="text-muted-foreground">{selectedStudent.grade}</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="ml-2">
            Change Student
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {students.map((student) => (
            <DropdownMenuItem
              key={student.id}
              onClick={() => onSelectStudent(student)}
              className="flex items-center justify-between"
            >
              <span>Student #{student.id}</span>
              <span className="text-muted-foreground text-xs">{student.grade}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
