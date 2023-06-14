import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';
 import { Branch } from './entities/branch.entity';

@Injectable()
export class BranchService {
  createBranch: any;
 
  constructor(
    @InjectRepository(Branch)
    private readonly branchRepository: Repository<Branch>,
  ) {}

  async createUser(branchData: Branch): Promise<Branch> {
    const branch = this.branchRepository.create(branchData);
    return this.branchRepository.save(branch);
  }


  async getBranchById(id: number): Promise<Branch> {
    return this.branchRepository.findOne({ where: { id } });
  }

  async updateBranch(id: number, branchData: Branch): Promise<Branch> {
    const branch = await this.getBranchById(id);
    this.branchRepository.merge(branch, branchData);
    return this.branchRepository.save(branch);
  }

  // async deleteUser(id: number): Promise<void> {
  //   await this.userRepository.delete(id);
    async deleteBranch(id: number): Promise<void> {
    const existingBranch = await this.branchRepository.delete(id);
      
      if (!existingBranch) {
      throw new Error(`Branch with id ${id} not found`);
      }
      await this.branchRepository.delete(id);
}
  
}
