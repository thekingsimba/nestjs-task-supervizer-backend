import { Test, TestingModule } from '@nestjs/testing';
import { UserAuthController } from './user-auth.controller';
import { UserAuthRepoService } from '../repo/user-auth.repo.service';

describe('UserAuthController', () => {
  let controller: UserAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAuthController],
      providers: [UserAuthRepoService],
    }).compile();

    controller = module.get<UserAuthController>(UserAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
