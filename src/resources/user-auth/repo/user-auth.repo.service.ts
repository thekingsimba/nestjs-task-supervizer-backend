import { Injectable, NotFoundException } from '@nestjs/common';
import { SignUpAuthDto } from '../dto/SignUpAuthDto';
import { SignInAuthDto } from '../dto/SignInAuthDto';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDetailsDto } from '../dto/UpdateUserDetailsDto';

@Injectable()
export class UserAuthRepoService {

  constructor(
    @InjectModel('User')
    private userModel: Model<User>) {

  }

  async create(newUserData: SignUpAuthDto) {
    const newUser = await this.userModel.create(newUserData);
    return newUser.toObject({ versionKey: false })

    // const newUser = new this.userModel(newUserData)

    // newUser.save()

    // return newUser.toObject({ versionKey: false });
  }

  async findUser(email: string): Promise<User> {
    const userFound = await this.userModel.findOne({ email });
    return userFound;
  }

  update(id: string, userDetails: UpdateUserDetailsDto) {
    return `This action updates a #${id} userAuth`;
  }

}
