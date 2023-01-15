import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { Student } from './student/student.model';
import { StudentModule } from './student/student.module';
// import { StudentRepository } from './student/student.repository';
import { StudentService } from './student/student.service';

@Module({
  imports: [StudentModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
