import { AppConfigModule } from '@app/app-config';
import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { resolve } from 'path';
import { AdminWebController } from './admin-web.controller';
import { AdminWebService } from './admin-web.service';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        dir: resolve(__dirname, ''),
      }),
      {
        dev: process.env.NODE_ENV !== 'production',
      },
    ),
    AppConfigModule,
  ],
  controllers: [AdminWebController],
  providers: [AdminWebService],
})
export class AdminWebModule {}
