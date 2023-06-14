import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
  import { Office } from './entities/office.entity';

@Injectable()
export class OfficeService {
  updateOffice(officename: string, officeData: Office): Office | PromiseLike<Office> {
    throw new Error('Method not implemented.');
  }
  deleteOffice(officename: string): void | PromiseLike<void> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Office)
    private readonly  officeRepository: Repository<Office>,
  ) {}

  async createOffice(officeData: Office): Promise< Office> {
    const  office = this. officeRepository.create(officeData);
    return this. officeRepository.save( office);
  }

  async getOfficeById(officename: string): Promise< Office> {
    return this. officeRepository.findOne({ where: { officename } });
  }

  async updateUser(officename: string, officeData:  Office): Promise< Office> {
    const  office = await this.getOfficeById(officename);
    this. officeRepository.merge( office,  officeData);
    return this. officeRepository.save( office);
  }

 
    async deleteUser(officename: string): Promise<void> {
    const existingOffice = await this. officeRepository.delete(officename);
      
      if (!existingOffice) {
      throw new Error(` Office with officename ${officename} not found`);
      }
      await this. officeRepository.delete(officename);
}
  }
