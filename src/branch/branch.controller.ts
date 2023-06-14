import { Controller, Get, Post, Body,Param, Delete } from '@nestjs/common';
import { Put } from '@nestjs/common/decorators';
import { Branch } from './entities/branch.entity';
import { BranchService } from './branch.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Branch Service Section')
@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Post()
  async createBranch(@Body() branchData: Branch): Promise<Branch> {
    return this.branchService.createBranch(branchData);
  }

  
  @Get(':id')
  async getBranchById(
    @Param('id') id: number,
    @Param('name') IsName: string) {
    return this.branchService.getBranchById(+id);
  }

 @Put(':id')
 async updateBranch(
  @Param('id') id: number,
  @Param('branchName') IsValidBranchName: string,
  @Param('location') IsValidLocation: string,
  @Body() branchData: Branch) {
    return this.branchService.updateBranch(+id, branchData);
  }

  @Delete(':id')
  async deleteBranch(@Param('id') id: number): Promise<void> {
    return this.branchService.deleteBranch(+id);
  }
}
