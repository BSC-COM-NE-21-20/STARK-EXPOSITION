import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Customer Service Section')
@Controller('customer')
export class CustomerController {
  customerService: any;
  constructor(
    @InjectRepository( Customer)
    private readonly userRepository: Repository<Customer>,
  ) {}
  
  @Post()
  async createCustomer(@Body() customerData: Customer): Promise<Customer> {
    return this.customerService.createCustomer(customerData);
  }

  @Get(':id')
  async  getCustomerById(@Param('id') id: number): Promise<Customer> {
    return this.customerService.getCustomerById(id);
  }
 
  @Put(':id')
  async updateCustomer(
    @Param('id') id: number,
    @Param('username') IsUsername: string,
    @Param('email') IsValidEmail: string,
    @Param('password') IsStrongPassword: string,
    @Body() customerData: Customer,
  ): Promise< Customer> {
    return this.customerService.updateCustomer(id, customerData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return this.customerService.deleteUser(id);
  }
}