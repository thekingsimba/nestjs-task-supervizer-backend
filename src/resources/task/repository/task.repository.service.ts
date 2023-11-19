import { TaskSchema } from '../schema/task.schema';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDto } from '../dto/create-task.dto';
import { Task } from '../entities/task.entity';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class TaskRepositoryService {

  constructor(@InjectModel("TaskSchema") private taskModel: Model<Task>) { }

  async findAllTaskAssignedToUser(userId: string, pageSize: number, pageNumber: number) {
    const totalNumberTaskFound = await this.taskModel.find({ assignTo_userId: userId }).count();
    let totalNumberOfPage: number;

    if ((totalNumberTaskFound % pageSize) > 0) {
      totalNumberOfPage = (totalNumberTaskFound / pageSize) + 1
    } else {
      totalNumberOfPage = totalNumberTaskFound / pageSize;
    }


    const currentPageTask: Task[] = await this.taskModel.find({ assignTo_userId: userId })
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)
      .exec()

    return {
      currentPageTask,
      totalNumberOfPage
    }

  }

  async update(id: number, changes: UpdateTaskDto) {
    return this.taskModel.findOneAndUpdate({ _id: id }, changes, { new: true });
  }


  async create(newTask: CreateTaskDto) {
    return this.taskModel.create(newTask);
  }


  async findOne(id: number) {
    return this.taskModel.findById(id);
  }

  async remove(id: number) {
    return this.taskModel.deleteOne({ _id: id });
  }
}
