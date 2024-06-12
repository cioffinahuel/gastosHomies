import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/users')
  @ApiTags('users')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post('/users')
  @ApiTags('users')
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @UseGuards(AuthGuard)
  @ApiTags('users')
  @Get('/users/:email') 
  getUserByEmail(@Param('email') email: string){ 
    return this.usersService.findOne(email); 
  }
}
