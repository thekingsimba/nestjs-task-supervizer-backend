import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserAuthController } from './user-auth.controller';
import { UserAuthRepoService } from './user-auth.repo.service';
import { userSchema } from './schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "User",
        schema: userSchema
      },
    ])
  ],
  controllers: [UserAuthController],
  providers: [UserAuthRepoService],
})
export class UserAuthModule { }
