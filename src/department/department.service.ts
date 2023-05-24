import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
  import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
 
  constructor(
    @InjectRepository( Department)
    private readonly   departmentRepository: Repository< Department>,
  ) {}

  async createDepartment( deptData:  Department): Promise<Department> {
    const  department = this.departmentRepository.create( deptData);
    return this.departmentRepository.save( department);
   
  }

  async getDepartmentById(id: number): Promise<Department> {
    return this.departmentRepository.findOne({ where: { id } });
  }

  async updateDepartment(id: number,  deptData:  Department): Promise< Department> {
    const  department = await this.getDepartmentById(id);
    this.departmentRepository.merge(department,  deptData);
    return this.departmentRepository.save( department);
  }
   
    async deleteDepartment(id: number): Promise<string> {
    const  existingDepartment = await this.departmentRepository.delete(id);
      return `Department with id ${id} was deleted successfully`;
    }
      // if (!existingDepartment) {
      // throw new Error(`Department with id ${id} not found`);
      // }
      // await this.departmentRepository.delete(id);
}

