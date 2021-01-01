import { Module } from '@nestjs/common';
import { UserWebController } from './user-web.controller';
import { UserWebService } from './user-web.service';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { resolve } from 'path';
import { AppConfigModule } from '@app/app-config';
console.log(resolve(__dirname, ''), process.env.NODE_ENV, process.cwd());

const dev = process.env.NODE_ENV !== 'production';
const nextDir = (function () {
  switch (process.env.NODE_ENV) {
    case 'test':
      return resolve(__dirname, 'ui');
    default:
      return resolve(__dirname, 'ui');
  }
})();
@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev,
        dir: nextDir,
      }),
      {
        dev,
      },
    ),
    AppConfigModule,
  ],
  controllers: [UserWebController],
  providers: [UserWebService],
})
export class UserWebModule { }
