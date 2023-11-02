import { PartialType } from "@nestjs/mapped-types";
import { User } from "../entities/user.entity";
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

//export class SignUpAuthDto extends PartialType(User) { }
export class SignUpAuthDto {

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  phoneNumber: string;

  @IsBoolean()
  isActive: boolean;
}
