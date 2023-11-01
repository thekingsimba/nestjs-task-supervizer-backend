import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserSchema } from './schema/user.schema';
import { UserAuthController } from './controller/user-auth.controller';
import { UserAuthRepoService } from './repo/user-auth.repo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "User",
        schema: UserSchema
      },
    ])
  ],
  controllers: [UserAuthController],
  providers: [UserAuthRepoService],
})
export class UserAuthModule { }
