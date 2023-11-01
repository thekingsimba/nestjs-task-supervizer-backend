import { PartialType } from '@nestjs/mapped-types';
import { CreateUserAuthDto } from './create-user-auth.dto';

export class UpdateUserAuthDto extends PartialType(CreateUserAuthDto) {}
