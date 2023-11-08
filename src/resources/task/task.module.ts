import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TaskSchema } from './schema/task.schema';
import { TaskRepositoryService } from './repository/task.repository.service';
import { TaskController } from './controller/task.controller';

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
