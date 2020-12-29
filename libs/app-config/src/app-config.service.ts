import { Injectable } from '@nestjs/common';

@Injectable()
export class AppConfigService {
  getDbAdapterMode(): string {
    return 'file';
  }
}
