import { LoggerService } from '@nestjs/common';

export interface Logger extends LoggerService {
  log(logComment: string): void;

  info(logComment: string): void;

  warn(logComment: string): void;

  error(logComment: string): void;
}
