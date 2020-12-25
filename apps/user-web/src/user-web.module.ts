import { Module } from '@nestjs/common';
import { UserWebController } from './user-web.controller';
import { UserWebService } from './user-web.service';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { resolve } from 'path';
console.log(resolve(__dirname, '../../ui'));
@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        dir: resolve(__dirname, '../../ui'),
      }),
      {
        dev: process.env.NODE_ENV !== 'production',
      },
    ),
  ],
  controllers: [UserWebController],
  providers: [UserWebService],
})
export class UserWebModule {}
