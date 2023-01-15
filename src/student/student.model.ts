import { PrimaryGeneratedColumn, Column, Index, Entity } from 'typeorm';
@Entity()
@Index(['studentId', 'firstName', 'lastName'], { unique: true })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    nullable: false,
  })
  firstName: string;
  @Column({
    nullable: false,
  })
  lastName: string;
  @Column({
    nullable: false,
  })
  age: number;
  @Column({
    nullable: false,
  })
  gender: GenderType;
  @Column({
    nullable: false,
  })
  classGrade: ClassGradeType;
  @Column({
    nullable: false,
    unique: true,
  })
  studentId: number;
}

export enum GenderType {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
export enum ClassGradeType {
  ALPHA = 'ALPHA',
  BETA = 'BETA',
  OMEGA = 'OMEGA',
  GAMMA = 'GAMMA',
}
