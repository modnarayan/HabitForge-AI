import { Injectable, LoggerService as NestLoggerService } from '@nestjs/common';
import * as winston from 'winston';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LoggerService implements NestLoggerService {
  private logger: winston.Logger;

  constructor(private configService: ConfigService) {
    this.logger = winston.createLogger({
      level: this.configService.get('app.logging.level') ?? 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports: [new winston.transports.Console()],
    });
  }

  private getContextMeta(context?: string, trace?: string) {
    return {
      service: this.configService.get('app.serviceName') ?? 'unknown-service',
      environment: this.configService.get('app.env') ?? 'local',
      traceId: trace ?? new Date().getTime().toString(),
      context,
    };
  }

  log(message: string, context?: string) {
    this.logger.info(message, this.getContextMeta(context));
  }

  error(message: string, traceOrContext?: string, context?: string) {
    const meta =
      context !== undefined
        ? this.getContextMeta(context, traceOrContext)
        : this.getContextMeta(traceOrContext);
    this.logger.error(message, meta);
  }

  warn(message: string, context?: string) {
    this.logger.warn(message, this.getContextMeta(context));
  }

  debug(message: string, context?: string) {
    this.logger.debug(message, this.getContextMeta(context));
  }

  verbose(message: string, context?: string) {
    this.logger.verbose(message, this.getContextMeta(context));
  }
}
