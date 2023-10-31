import { TaskSchema } from './../schema/task.schema';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDto } from '../dto/create-task.dto';
import { Task } from '../entities/task.entity';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class TaskRepositoryService {

  constructor(@InjectModel("TaskSchema") private taskModel: Model<Task>) { }

  create(createTaskDto: CreateTaskDto) {
    this.taskModel.find()
    return 'This action adds a new task';
  }

  findAll() {
    return 'This action returns all task';
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
