import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
  import { Office } from './entities/office.entity';

@Injectable()
export class OfficeService {
  updateOffice(id: number, officeData: Office): Office | PromiseLike<Office> {
    throw new Error('Method not implemented.');
  }
  deleteOffice(id: number): void | PromiseLike<void> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Office)
    private readonly  officeRepository: Repository<Office>,
  ) {}

  // create(: CreateOfficeDto) {
  //   return 'This action adds a new office';
  // }

  // findAll() {
  //   return `This action returns all office`;
  // }

  async createOffice(officeData: Office): Promise< Office> {
    const  office = this. officeRepository.create(officeData);
    return this. officeRepository.save( office);
  }

  async getOfficeById(id: number): Promise< Office> {
    return this. officeRepository.findOne({ where: { id } });
  }

  async updateUser(id: number, officeData:  Office): Promise< Office> {
    const  office = await this.getOfficeById(id);
    this. officeRepository.merge( office,  officeData);
    return this. officeRepository.save( office);
  }

 
    async deleteUser(id: number): Promise<void> {
    const existingOffice = await this. officeRepository.delete(id);
      
      if (!existingOffice) {
      throw new Error(` Office with id ${id} not found`);
      }
      await this. officeRepository.delete(id);
}
  }
