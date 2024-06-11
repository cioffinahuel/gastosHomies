import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  private readonly users = [
    {
      id: 1,
      email: 'john',
      password: 'changeme',
    },
    {
      id: 2,
      email: 'maria',
      password: 'guess',
    },
  ];
  getUsers() {
    return this.prisma.user.findMany();
  }

  createUser(user: CreateUserDto) {
    return this.prisma.user.create({ data: user });
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.prisma.user.findFirstOrThrow({ where: { email: email } });
  }
}
