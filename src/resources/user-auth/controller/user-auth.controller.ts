import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UnauthorizedException, HttpException } from '@nestjs/common';
import { SignUpAuthDto } from '../dto/SignUpAuthDto';
import { SignInAuthDto } from '../dto/SignInAuthDto';
import { UpdateUserDetailsDto } from '../dto/UpdateUserDetailsDto';
import { UserAuthRepoService } from '../repo/user-auth.repo.service';
import * as passwordHash from 'password-hash-and-salt'
import * as jwt from 'jsonwebtoken'
import { User } from '../entities/user.entity';

import { SignInAuthResponseDto } from '../dto/SignInAuthResponseDto';
import { JWT_SECRET } from 'src/constants/constants';
@Controller('auth')
export class UserAuthController {
  constructor(private readonly userAuthService: UserAuthRepoService) { }

  @Post()
  signUp(@Body() createUserAuthDto: SignUpAuthDto) {
    // hash the password
    passwordHash(createUserAuthDto.password).hash(function (error, hash) {
      if (error) {
        throw new Error('Something went wrong!');
      }

      createUserAuthDto.password = hash;
    })

    return this.userAuthService.create(createUserAuthDto)

  }

  @Post()
  async signIn(@Body() signUpAuthDto: SignInAuthDto): Promise<SignInAuthResponseDto> {
    const userDB = await this.userAuthService.findUser(signUpAuthDto.email)
    if (!userDB) {
      throw new NotFoundException("User not found");
    }

    return new Promise((resolve, reject) => {

      passwordHash(signUpAuthDto.password).verifyAgainst(userDB.password, function (error, verified) {
        if (error)
          reject(new HttpException('Oops! Something went wrong on our end...', 500));

        if (!verified) {
          reject(new UnauthorizedException('User or password invalid!'));

        } else { // user confirmed 
          const userDetailsForToken = userDB as SignInAuthResponseDto
          const token: string = jwt.sign({ ...userDetailsForToken }, JWT_SECRET);
          const response: SignInAuthResponseDto = {
            ...userDetailsForToken,
            token
          }
          resolve(response)

        }
      });

    })


  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userAuthService.findOne(+id);
  // }

  @Patch(':id')
  updateUserDetails(@Param('id') id: string, @Body() userDetailsUpdater: UpdateUserDetailsDto) {
    return this.userAuthService.update(id, userDetailsUpdater);
  }

}
