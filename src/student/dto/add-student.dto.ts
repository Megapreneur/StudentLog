import { ClassGradeType, GenderType } from '../student.model';

export class AddStudentDto {
  firstName: string;
  lastName: string;
  age: number;
  classGrade: ClassGradeType;
  gender: GenderType;
  studentId: number;
}
