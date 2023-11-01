import { Injectable } from '@nestjs/common';
import { CreateUserAuthDto } from './dto/create-user-auth.dto';
import { UpdateUserAuthDto } from './dto/update-user-auth.dto';

@Injectable()
export class UserAuthService {
  create(createUserAuthDto: CreateUserAuthDto) {
    return 'This action adds a new userAuth';
  }

  findAll() {
    return `This action returns all userAuth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAuth`;
  }

  update(id: number, updateUserAuthDto: UpdateUserAuthDto) {
    return `This action updates a #${id} userAuth`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAuth`;
  }
}
