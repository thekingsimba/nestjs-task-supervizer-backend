import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TaskSchema } from './schema/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: "task",
      schema: TaskSchema
    }])
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule { }
