import { Module } from '@nestjs/common';
import { DepartmentModule } from './department/department.module';
import { OfficeModule } from './office/office.module';
import { AgentsModule } from './agents/agents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
     

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-chvq8gfdvk4oirnpk93g-a',
      port: 5432,
      username: 'stark_db_user',
      password: 'BA5LnPN2nGSpfvsFfudjFDkV46glB2Ev',
      database: 'stark_db',
      autoLoadEntities: true,
      synchronize: true,

    }),
  UserModule, AgentsModule, DepartmentModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
