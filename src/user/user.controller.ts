import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Other Users Service Section')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBody({
    description: 'User data',
    schema: {
      type: 'object',
      properties: {
        firstname: { type: 'string', example: 'Stark', description: 'User firstname' },
        lastname: { type: 'string', example: 'Expo', description: 'User lastname' },
        username: { type: 'string', example: 'ExpoWilson', description: 'User username' },
        email: { type: 'string', example: 'sparkwilson2026@expo', description: 'User email' },
        password: { type: 'string', example: 'Expo****', description: 'User pasword' },
        createdAt: { type: 'Date', example: '', description: 'User createdAt' },
        isActive: { type: 'Date', example: '', description: 'User isActive' },


      },
    },
  })
  async createUser(@Body() userData: User): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Get(':username')
  async getUserById(@Param('username') username: string): Promise<any> {
    const user = await this.userService.getUserById(username);
    return { user };
   }
 
  @Put(':username')
  async updateUser(
    @Param('username') username: string, @Body() userData: User,): Promise<User> {
    return this.userService.updateUser(username, userData);
  }


  @Delete(':username')
  async deleteUser(@Param('username') username: string): Promise<{ message: string }> {
    await this.userService.deleteUser(username);
    return { message: 'User with username ${username} has been deleted successfully' };
    // return this.userService.deleteUser(username);
   }

   //search user after delete
   @Get(':username')
  async searchUser(@Query() query: any): Promise<any> {
    const users = await this.userService.searchUser(query);
    return { users };
  }
}
