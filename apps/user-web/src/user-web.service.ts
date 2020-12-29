import { AppConfigService } from '@app/app-config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserWebService {
  constructor(private appConfig: AppConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getDbAdapterMode(): string {
    return this.appConfig.getDbAdapterMode();
  }
}
