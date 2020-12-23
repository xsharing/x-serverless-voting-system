import { Injectable } from '@nestjs/common';

@Injectable()
export class UserWebService {
  getHello(): string {
    return 'Hello World!';
  }
}
