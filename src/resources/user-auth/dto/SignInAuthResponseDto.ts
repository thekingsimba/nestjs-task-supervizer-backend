import { IsBoolean, IsEmail, IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { User } from "../entities/user.entity";

type CustomUserFields = Exclude<keyof User, 'password'>;


export class SignInAuthResponseDto implements Pick<User, CustomUserFields>  {
  @IsString()
  @IsMongoId()
  _id: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  phoneNumber: string;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  @IsNotEmpty()
  token: string;
}