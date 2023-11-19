import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { TaskRepositoryService } from '../repository/task.repository.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { Task } from '../entities/task.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskRepositoryService) { }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }


  // find all task assigned to a certain user break into pages
  @Get('/:userId')
  async findAll(
    @Param("userId") userId: string,
    @Query('pageNumber', ParseIntPipe) pageNumber = 1,
    @Query('pageSize', ParseIntPipe) pageSize = 10
  ): Promise<{ currentPageTask: Task[], totalNumberOfPage: number }> {
    return this.taskService.findAllTaskAssignedToUser(userId, pageSize, pageNumber);
  }

  // find one task assigned to a certain user
  @Get('/:assignedToUserId/:taskId')
  findOne(
    @Param('assignedToUserId') assignedToUserId: string,
    @Param('taskId') id: string
  ) {
    return this.taskService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
