import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  getDbAdapterMode(): string {
    return this.configService.get<string>('DB_ADAPTER_MODE');
  }
}
