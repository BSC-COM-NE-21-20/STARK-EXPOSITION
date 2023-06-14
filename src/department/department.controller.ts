import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from './entities/department.entity';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Departmental Service Section')
@Controller('department')
export class DepartmentController {
  constructor(
    private readonly departmentService: DepartmentService) {}
  
    @Post()
    @ApiBody({
      description: 'User data',
      schema: {
        type: 'object',
        properties: {
          departmentname: { type: 'string', example: 'Technical', description: 'User departmentname' },
          location: { type: 'string', example: 'Lilongwe', description: 'User location' },
          numberofassets: { type: 'string', example: '40 packages', description: 'User numberofassets' },
          description: { type: 'string', example: 'sparkwilson2026@expo', description: 'User desc' },
       
        },
      },
    })
    async createDepartment(@Body() deptData: Department): Promise<Department> {
      return this.departmentService.createDepartment(deptData);
    }
  
    @Get(':id')
    async getDepartmentById(@Param('id') id: number): Promise<Department> {
      return this.departmentService.getDepartmentById(id);
    }
   
    @Put(':id')
    async updateDepartment(
      @Param('id') id: number,
      @Param('departmentName') IsDepartmentName: string,
      @Param('location') IsValidLocation: string,
      @Body()  deptData:  Department,
    ): Promise< Department> {
      return this.departmentService.updateDepartment(id,  deptData);
    }
  
    @Delete(':id')
    async  deleteDepartment(@Param('id') id: number): Promise<string> {
      return this.departmentService.deleteDepartment(id);
    }
  }
   