import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [CustomerModule, UserModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
