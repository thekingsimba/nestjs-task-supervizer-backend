import { IsBoolean, IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class User {
  @IsString()
  @IsMongoId()
  _id: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  phoneNumber: string;

  @IsBoolean()
  isActive: boolean;
}
