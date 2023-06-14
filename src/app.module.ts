import { Module } from '@nestjs/common';
import { DepartmentModule } from './department/department.module';
import { OfficeModule } from './office/office.module';
import { AgentsModule } from './agents/agents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
     

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'stark_db',
      autoLoadEntities: true,
      synchronize: true,

    }),
  UserModule, AgentsModule, DepartmentModule,  OfficeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
