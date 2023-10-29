import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_DB_URL } from './constants/constants';

@Module({
  imports: [
    CustomerModule,
    UserModule,
    TaskModule,
    MongooseModule.forRoot(MONGO_DB_URL)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
