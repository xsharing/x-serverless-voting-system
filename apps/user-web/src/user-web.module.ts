import { Module } from '@nestjs/common';
import { UserWebController } from './user-web.controller';
import { UserWebService } from './user-web.service';

@Module({
  imports: [],
  controllers: [UserWebController],
  providers: [UserWebService],
})
export class UserWebModule {}
