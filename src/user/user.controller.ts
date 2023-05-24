import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData: User): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<any> {
    const user = await this.userService.getUserById(id);
    return { user };
    // return this.userService.getUserById(id);
  }
 
  @Put(':id')
  async updateUser(
    @Param('id') id: number, @Body() userData: User,
  ): Promise<User> {
    return this.userService.updateUser(id, userData);
  }


  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<{ message: string }> {
    await this.userService.deleteUser(id);
    return { message: 'User with id ${id} has been deleted successfully' };
    // return this.userService.deleteUser(id);
   }

   //search user after delete
   @Get(':username')
  async searchUser(@Query() query: any): Promise<any> {
    const users = await this.userService.searchUser(query);
    return { users };
  }
}
