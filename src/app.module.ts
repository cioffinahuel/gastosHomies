import { Module } from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module'; 
import { GroupsModule } from './groups/groups.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ExpensesModule, GroupsModule, AuthModule, UsersModule]
})
export class AppModule {}
