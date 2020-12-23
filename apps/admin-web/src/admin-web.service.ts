import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminWebService {
  getHello(): string {
    return 'Hello World!';
  }
}
