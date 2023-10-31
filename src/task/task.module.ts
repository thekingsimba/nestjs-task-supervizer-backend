import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskSchema } from './schema/task.schema';
import { TaskRepositoryService } from './repository/task.repository.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: "TaskSchema",
      schema: TaskSchema
    }])
  ],
  controllers: [TaskController],
  providers: [TaskRepositoryService],
})
export class TaskModule { }
