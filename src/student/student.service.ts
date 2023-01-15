import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddStudentDto } from './dto/add-student.dto';
import { ClassGradeType, GenderType, Student } from './student.model';
// import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async addStudent(addStudentDto: AddStudentDto): Promise<Student> {
    const {
      firstName,
      lastName,
      age,
      classGrade,
      gender,
      studentId,
    } = addStudentDto;
    const newStudent = new Student();
    newStudent.firstName = firstName;
    newStudent.lastName = lastName;
    newStudent.age = age;
    newStudent.classGrade = classGrade;
    newStudent.gender = gender;
    newStudent.studentId = studentId;
    this.studentRepository.save(newStudent);

    return newStudent;
  }

  async getStudentByStudentId(studentId: number): Promise<Student> {
    return this.studentRepository.findOne({ where: { studentId } });
  }

  async getAllStudentInAClass(classGrade: ClassGradeType): Promise<Student[]> {
    const limit = 100;
    const page = 1;
    return this.studentRepository.find({
      where: { classGrade },
      take: limit,
      skip: 100 * (page - 1),
    });
    // const totalStudentCount = await this.studentRepository.count();
    // const hasNext = totalStudentCount > limit * page
  }

  async getAllStudents(): Promise<Student[]> {
    const limit = 100;
    const page = 1;
    return this.studentRepository.find({
      take: limit,
      skip: 100 * (page - 1),
    });
  }

  getNumberOfFemaleStudentsInAClass(
    classGrade: ClassGradeType,
    gender: GenderType.FEMALE,
  ): Promise<number> {
    return this.studentRepository.count({ where: { classGrade, gender } });
  }

  getNumberOfMaleStudentsInAClass(
    classGrade: ClassGradeType,
    gender: GenderType.MALE,
  ): Promise<number> {
    return this.studentRepository.count({ where: { classGrade, gender } });
  }

  getNumberOfStudentsInAClass(classGrade: ClassGradeType): Promise<number> {
    return this.studentRepository.count({ where: { classGrade } });
  }

  async updateAStudent(
    studentId: number,
    classGrade: ClassGradeType,
  ): Promise<Student> {
    const student = await this.getStudentByStudentId(studentId);
    student.classGrade = classGrade;
    await this.studentRepository.update({ studentId }, { classGrade });
    return student;
  }
}
