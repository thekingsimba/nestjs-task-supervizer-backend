import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UnauthorizedException, HttpException, UsePipes, UseFilters } from '@nestjs/common';
import { SignUpAuthDto } from '../dto/SignUpAuthDto';
import { SignInAuthDto } from '../dto/SignInAuthDto';
import { UpdateUserDetailsDto } from '../dto/UpdateUserDetailsDto';
import { UserAuthRepoService } from '../repo/user-auth.repo.service';
import * as passwordHash from 'password-hash-and-salt'
import * as jwt from 'jsonwebtoken';
import { SignInAuthResponseDto, StrictSignInAuthResponseDto } from '../dto/SignInAuthResponseDto';
import { JWT_SECRET } from 'src/constants/constants';


@Controller('auth')
export class UserAuthController {
  constructor(private readonly userAuthService: UserAuthRepoService) { }

  @Post("signup")
  async signUp(@Body() createUserAuthDto: SignUpAuthDto) {

    let userData = createUserAuthDto;
    const parentScope = this;

    return new Promise((resolve, reject) => {
      passwordHash(createUserAuthDto.password).hash(async function (error, hash) {

        if (error) {
          reject(new HttpException('Something went wrong!', 500));
        }

        const userSaved = await parentScope.userAuthService.create({ ...userData, password: hash })

        resolve(userSaved);
      })

    })

  }

  @Post("signin")
  async signIn(@Body() signUpAuthDto: SignInAuthDto): Promise<StrictSignInAuthResponseDto> {

    const userDB = await this.userAuthService.findUser(signUpAuthDto.username)

    if (!userDB) {
      throw new NotFoundException("User not found");
    }

    return new Promise((resolve, reject) => {

      passwordHash(signUpAuthDto.password).verifyAgainst(userDB.password, function (error, verified) {
        if (error) {
          console.log(error)
          reject(new HttpException('Oops! Something went wrong on our end...', 500));
        }

        if (!verified) {
          reject(new UnauthorizedException('User or password invalid!'));
        }

        else { // user confirmed 
          const { password, _id, ...userRemainingData } = userDB;
          const token: string = jwt.sign(userRemainingData, JWT_SECRET);
          let signedUser = {
            id: userDB._id,
            ...userRemainingData,
            token
          };
          resolve(signedUser as StrictSignInAuthResponseDto);
        }
      });

    });
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
