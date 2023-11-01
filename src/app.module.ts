import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './resources/customer/customer.module';
import { TaskModule } from './resources/task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_DB_URL } from './constants/constants';
import { UserAuthModule } from './resources/user-auth/user-auth.module';

@Module({
  imports: [
    CustomerModule,
    TaskModule,
    MongooseModule.forRoot(MONGO_DB_URL),
    UserAuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
