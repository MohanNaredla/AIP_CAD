
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
      <div className="text-4xl">{selectedStudent.avatar}</div>
      <div>
        <h2 className="text-2xl font-semibold">{selectedStudent.name}</h2>
        <p className="text-muted-foreground">{selectedStudent.grade}</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="ml-2">
            Change <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {students.map((student) => (
            <DropdownMenuItem
              key={student.id}
              onClick={() => onSelectStudent(student)}
              className="flex items-center gap-2"
            >
              <span className="text-xl">{student.avatar}</span>
              <span>{student.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
