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

  async getUserById(username: string): Promise<User> {
    return this.userRepository.findOne({ where: { username } });
  }
 
  async updateUser(username: string, userData: User): Promise<User> {
    const user = await this.getUserById(username);
    this.userRepository.merge(user, userData);
    return this.userRepository.save(user);
  }
  
    async deleteUser(username: string): Promise<string> {
    const existingUser = await this.userRepository.delete(username);
      return `User with username ${username} was deleted successfully`;
      if (!existingUser) {
      throw new Error(`User with username ${username} not found`);  
      }
      await this.userRepository.delete(username);
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
