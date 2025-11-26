import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { LoggerService } from '@habitforge/logger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );

  const configService = app.get(ConfigService);
  // Use custom logger
  const logger = app.get(LoggerService);
  app.useLogger(logger);

  const port = configService.get('app.port');
  await app.listen(port);

  logger.log(
    `🚀 Habits Service running on port http://localhost:${port}`,
    'Bootstrap',
  );
}
bootstrap().catch((error) => {
  console.error('Failed to start application:', error);
  process.exit(1);
});
