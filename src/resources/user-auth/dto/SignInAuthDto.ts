import { PartialType } from '@nestjs/mapped-types';
import { SignUpAuthDto } from './SignUpAuthDto';

export class SignInAuthDto extends PartialType(SignUpAuthDto) {
  password: string;
}
