import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
//  
  constructor(
    @InjectRepository( Customer)
    private readonly  customerRepository: Repository< Customer>,
  ) {}

  async createCustomer( customerData:  Customer): Promise< Customer> {
    const  customer = this. customerRepository.create( customerData);
    return this. customerRepository.save( customer);
  }

  async getCustomerById(id: number): Promise< Customer> {
    return this. customerRepository.findOne({ where: { id } });
  }

  async updateCustomer(id: number,  customerData:  Customer): Promise< Customer> {
    const  customer = await this.getCustomerById(id);
    this. customerRepository.merge( customer,  customerData);
    return this. customerRepository.save( customer);
  }

 
    async deleteCustomer(id: number): Promise<void> {
    const existingCustomer = await this. customerRepository.delete(id);
      
      if (!existingCustomer) {
      throw new Error(` Customer with id ${id} not found`);
      }
      await this. customerRepository.delete(id);
}
  }
