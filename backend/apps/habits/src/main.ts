import { NestFactory } from '@nestjs/core';
import { HabitsModule } from './habits.module';

async function bootstrap() {
  const app = await NestFactory.create(HabitsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
