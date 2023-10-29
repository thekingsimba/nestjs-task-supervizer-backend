import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getServerActive(): string {
    return 'The REST API server is active!';
  }
}
