import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DepartmentService } from './department.service';
  import { Department } from './entities/department.entity';

@Controller('department')
export class DepartmentController {
    
  
    constructor(private readonly  departmentService: DepartmentService) {}
  
    @Post()
    async createDepartment(@Body()  deptData:  Department): Promise<Department> {
      return this.departmentService.createDepartment(deptData);
    }
  
    @Get(':id')
    async getDepartmentById(@Param('id') id: number): Promise< Department> {
      return this. departmentService.getDepartmentById(id);
    }
   
    @Put(':id')
    async updateDepartment(
      @Param('id') id: number,
      @Param('departmentName') IsDepartmentName: string,
      @Param('location') IsValidLocation: string,
      @Body()  deptData:  Department,
    ): Promise< Department> {
      return this. departmentService.updateDepartment(id,  deptData);
    }
  
    @Delete(':id')
    async  deleteDepartment(@Param('id') id: number): Promise<string> {
      return this.departmentService.deleteDepartment(id);
    }
  }
   