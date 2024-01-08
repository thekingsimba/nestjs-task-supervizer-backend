import { Injectable, NotFoundException } from '@nestjs/common';
import { SignUpAuthDto } from '../dto/SignUpAuthDto';
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

  async create(newUserData: SignUpAuthDto): Promise<User | null> {
    const newUser = await this.userModel.create(newUserData);
    return newUser ? newUser.toObject({ versionKey: false }) : null;
  }

  async findUser(username: string): Promise<User | null> {
    const userFound = await this.userModel.findOne({ username });
    return userFound ? userFound.toObject({ versionKey: false }) : null;
  }

  update(id: string, userDetails: UpdateUserDetailsDto) {
    return `This action updates a #${id} userAuth`;
  }

}
