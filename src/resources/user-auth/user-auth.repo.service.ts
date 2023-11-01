import { Injectable } from '@nestjs/common';
import { SignUpAuthDto } from './dto/SignUpAuthDto';
import { SignInAuthDto } from './dto/SignInAuthDto';

@Injectable()
export class UserAuthRepoService {
  create(createUserAuthDto: SignUpAuthDto) {
    return 'This action adds a new userAuth';
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} userAuth`;
  // }

  update(id: number, updateUserAuthDto: SignInAuthDto) {
    return `This action updates a #${id} userAuth`;
  }

}
