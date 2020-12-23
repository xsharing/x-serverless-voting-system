import { Controller, Get } from '@nestjs/common';
import { UserWebService } from './user-web.service';

@Controller()
export class UserWebController {
  constructor(private readonly userWebService: UserWebService) {}

  @Get()
  getHello(): string {
    return this.userWebService.getHello();
  }
}
