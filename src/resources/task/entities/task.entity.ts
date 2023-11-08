import { IsBoolean, IsDateString, IsMongoId, IsNotEmpty, IsString, MinLength } from "class-validator";

export class Task {

  @IsString()
  @IsMongoId()
  _id: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  taskTitle: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsDateString()
  @IsNotEmpty()
  createDate: string;

  @IsDateString()
  @IsNotEmpty()
  lastUpdate: string;

  @IsString()
  @IsNotEmpty()
  createdBy_username: string;

  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  createdBy_userId: string;

  @IsString()
  @IsNotEmpty()
  assignTo_username: string;

  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  assignTo_userId: string;
}
