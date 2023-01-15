import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AddStudentDto } from './dto/add-student.dto';
import { ClassGradeType, GenderType, Student } from './student.model';
import { StudentService } from './student.service';

@Controller('/students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post('/:addNewStudent')
  addStudent(@Body() addStudentDto: AddStudentDto): Promise<Student> {
    console.log('addStudent', addStudentDto);
    return this.studentService.addStudent(addStudentDto);
  }

  @Get('/:studentId')
  getStudentByStudentId(
    @Param('studentId') studentId: number,
  ): Promise<Student> {
    return this.studentService.getStudentByStudentId(studentId);
  }

  @Get('/:classGrade')
  getAllStudentInAClass(
    @Param('classGrade') classGrade: ClassGradeType,
  ): Promise<Student[]> {
    return this.studentService.getAllStudentInAClass(classGrade);
  }

  @Get()
  getAllStudents(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  }

  // @Get()
  // getNumberOfRegisteredStudents(): number {
  //   return this.studentService.getNumberOfRegisteredStudents();
  // }

  @Get('/:classGrade')
  getNumberOfStudentsInAClass(
    @Param('classGrade') classGrade: ClassGradeType,
  ): Promise<number> {
    return this.studentService.getNumberOfStudentsInAClass(classGrade);
  }

  @Patch('/:studentId/classGrade')
  updateAStudent(
    @Param('studentId') studentId: number,
    @Body('classGrade') classGrade: ClassGradeType,
  ): Promise<Student> {
    return this.studentService.updateAStudent(studentId, classGrade);
  }

  @Get('/getFemaleStudentsInClass')
  getNumberOfFemaleStudentsInClass(
    @Param('classGrade') classGrade: ClassGradeType,
    @Body('gender') gender: GenderType,
  ): Promise<number> {
    console.log('Female students');
    return this.studentService.getNumberOfFemaleStudentsInAClass(
      classGrade,
      (gender = GenderType.FEMALE),
    );
  }

  @Get('/getMaleStudentsInClass')
  getNumberOfMaleStudentsInClass(
    @Param('classGrade') classGrade: ClassGradeType,
    @Body('gender') gender: GenderType,
  ): Promise<number> {
    return this.studentService.getNumberOfMaleStudentsInAClass(
      classGrade,
      GenderType.MALE,
    );
  }
}
