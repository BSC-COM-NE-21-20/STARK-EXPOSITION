import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
              
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userData: User): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
    //return `User created successfully`;
   
   
  }

  async getUserById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }
 
  async updateUser(id: number, userData: User): Promise<User> {
    const user = await this.getUserById(id);
    this.userRepository.merge(user, userData);
    return this.userRepository.save(user);
  }

 
    async deleteUser(id: number): Promise<string> {
    const existingUser = await this.userRepository.delete(id);
      return `User with id ${id} was deleted successfully`;
      if (!existingUser) {
      throw new Error(`User with id ${id} not found`);  
      }
      await this.userRepository.delete(id);
}
//searching the user
async searchUser(query: any): Promise<User[]> {
  // create a query object with the search criteria
  const queryBuilder = this.userRepository.createQueryBuilder('user');

  if (query.username) {
    queryBuilder.andWhere('user.username LIKE :username', { username: `%${query.username}%` });
  }

  if (query.email) {
    queryBuilder.andWhere('user.email LIKE :email', { email: `%${query.email}%` });
  }

  if (query.firstname) {
    queryBuilder.andWhere('user.firstname LIKE :firstname', { firstname: `%${query.firstname}%` });
  }

  // execute the query and return the result
  const users = await queryBuilder.getMany();
  return users;
}
  }
