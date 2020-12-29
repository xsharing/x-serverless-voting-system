import { NestFactory } from '@nestjs/core';
import { AdminWebModule } from './admin-web.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminWebModule);
  await app.listen(3001);
}
bootstrap();
