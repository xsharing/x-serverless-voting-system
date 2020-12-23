import { Controller, Get } from '@nestjs/common';
import { AdminWebService } from './admin-web.service';

@Controller()
export class AdminWebController {
  constructor(private readonly adminWebService: AdminWebService) {}

  @Get()
  getHello(): string {
    return this.adminWebService.getHello();
  }
}
