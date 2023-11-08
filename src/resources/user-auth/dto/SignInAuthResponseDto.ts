import { IsBoolean, IsEmail, IsMongoId, IsNotEmpty, IsString } from "class-validator";
export class SignInAuthResponseDto {
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


export type StrictSignInAuthResponseDto = SignInAuthResponseDto & { [key: string]: never };

