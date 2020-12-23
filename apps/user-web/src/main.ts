import { NestFactory } from '@nestjs/core';
import { UserWebModule } from './user-web.module';

async function bootstrap() {
  const app = await NestFactory.create(UserWebModule);
  await app.listen(3000);
}
bootstrap();
