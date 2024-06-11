import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from 'class-validator';

export class LoginUserDto {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    password: string;
}