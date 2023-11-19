export class CreateTaskDto {
  taskTitle: string;
  description: string;
  status: boolean;
  createDate: string;
  lastUpdate: string;
  createdBy_username: string;
  createdBy_userId: string;
  assignTo_username: string;
  assignTo_userId: string;
}
