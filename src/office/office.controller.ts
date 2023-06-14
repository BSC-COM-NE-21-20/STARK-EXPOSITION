import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfficeService } from './office.service';
import { Office } from './entities/office.entity';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Office Section')
@Controller('office')
export class OfficeController {
constructor(private readonly  officeService:  OfficeService) {}

@Post()
@ApiBody({
  description: 'office data',
  schema: {
    type: 'object',
    properties: {
      officename: { type: 'string', example: 'Stark', description: 'User officename' },
      offceemail: { type: 'string', example: 'office@expo', description: 'User officeemail' },
      description: { type: 'string', example: 'Type Somethimh Here', description: 'User description' },
    },
  },
})
async createOffice(@Body()  officeData:  Office): Promise< Office> {
  return this. officeService.createOffice( officeData);
}

@Get(':officename')
async  getOfficeById(@Param('officename') officename: string): Promise< Office> {
  return this. officeService. getOfficeById(officename);
}

@Patch(':officename')
async updateOffice(
  @Param('officename') officename: string,
  @Param('officeName') IsOfficeName: string,
  @Param('officeEmail') IsOfficeEmail: string,
  @Body()  officeData:  Office,
): Promise<string> {
     // return this. officeService. deleteOffice(officename) || 
    return `Successfully updated..`;
  }
  // return this. officeService.updateOffice(officename,  officeData);

@Delete(':officeName')
async  deleteOffice(@Param('officeName') officeName: string): Promise<string> {
  // return this. officeService. deleteOffice(officename) || 
  return `Successfully deleted..`;
}
}

