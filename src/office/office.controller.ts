import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfficeService } from './office.service';
import { Office } from './entities/office.entity';

@Controller('office')
export class OfficeController {
constructor(private readonly  officeService:  OfficeService) {}

@Post()
async createOffice(@Body()  officeData:  Office): Promise< Office> {
  return this. officeService.createOffice( officeData);
}

@Get(':id')
async  getOfficeById(@Param('id') id: number): Promise< Office> {
  return this. officeService. getOfficeById(id);
}

@Patch(':id')
async updateOffice(
  @Param('id') id: number,
  @Param('officeName') IsOfficeName: string,
  @Param('officeEmail') IsOfficeEmail: string,
  @Param('password') IsStrongPassword: string,
  @Body()  officeData:  Office,
): Promise<string> {
     // return this. officeService. deleteOffice(id) || 
    return `Successfully updated..`;
  }
  // return this. officeService.updateOffice(id,  officeData);

@Delete(':officeName')
async  deleteOffice(@Param('officeName') officeName: string): Promise<string> {
  // return this. officeService. deleteOffice(id) || 
  return `Successfully deleted..`;
}
}

