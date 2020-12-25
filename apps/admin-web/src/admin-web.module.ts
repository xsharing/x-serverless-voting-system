import { Module } from '@nestjs/common';
import { AdminWebController } from './admin-web.controller';
import { AdminWebService } from './admin-web.service';

@Module({
  imports: [],
  controllers: [AdminWebController],
  providers: [AdminWebService],
})
export class AdminWebModule {}
