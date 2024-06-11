import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @ApiTags('auth')
  @Post('login')
  signIn(@Body() login: LoginUserDto) {
    return this.authService.signIn(login.email, login.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  @ApiTags('auth')
  getProfile(@Request() req) {
    return req.user;
  }
}