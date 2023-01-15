import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Student } from 'src/student/student.model';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'admin',
  password: 'admin',
  database: 'nestjs_student_management_db',
  entities: [Student],
  synchronize: true,
};
