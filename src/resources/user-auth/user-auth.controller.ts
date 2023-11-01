import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SignUpAuthDto } from './dto/SignUpAuthDto';
import { SignInAuthDto } from './dto/SignInAuthDto';
import { UpdateUserDetailsDto } from './dto/UpdateUserDetailsDto';
import { UserAuthRepoService } from './user-auth.repo.service';

@Controller('auth')
export class UserAuthController {
  constructor(private readonly userAuthService: UserAuthRepoService) { }

  @Post()
  signUp(@Body() createUserAuthDto: SignUpAuthDto) {
    return this.userAuthService.create(createUserAuthDto);
  }

  @Post()
  signIn(@Body() signUpAuthDto: SignInAuthDto) {
    //return this.userAuthService.create(createUserAuthDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userAuthService.findOne(+id);
  // }

  @Patch(':id')
  updateUserDetails(@Param('id') id: string, @Body() userDetailsUpdater: UpdateUserDetailsDto) {
    return this.userAuthService.update(+id, userDetailsUpdater);
  }

}
