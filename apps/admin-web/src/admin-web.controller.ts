import { Controller, Get, Render } from '@nestjs/common';
import { AdminWebService } from './admin-web.service';

@Controller()
export class AdminWebController {
  constructor(private readonly adminWebService: AdminWebService) {}

  @Get()
  @Render('admin/Index')
  public index() {
    return {};
  }
}
