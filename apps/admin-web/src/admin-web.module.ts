import { AppConfigModule } from '@app/app-config';
import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { resolve } from 'path';
import { AdminWebController } from './admin-web.controller';
import { AdminWebService } from './admin-web.service';

const dev =
  process.env.NODE_ENV !== 'production';
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
  controllers: [AdminWebController],
  providers: [AdminWebService],
})
export class AdminWebModule {}
