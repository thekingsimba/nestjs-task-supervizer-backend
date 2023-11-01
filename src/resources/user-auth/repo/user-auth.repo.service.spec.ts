import { Test, TestingModule } from '@nestjs/testing';
import { UserAuthRepoService } from './user-auth.repo.service';

describe('UserAuthService', () => {
  let service: UserAuthRepoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAuthRepoService],
    }).compile();

    service = module.get<UserAuthRepoService>(UserAuthRepoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
