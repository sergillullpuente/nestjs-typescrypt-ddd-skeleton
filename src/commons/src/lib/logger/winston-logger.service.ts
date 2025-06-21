import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import { Logger } from './logger';

enum Levels {
    DEBUG = 'debug',
    ERROR = 'error',
    INFO = 'info'
}

@Injectable()
export class WinstonLogger implements Logger {
    private readonly logger: winston.Logger;

    constructor() {
        this.logger = winston.createLogger({
            level: 'debug',
            format: winston.format.combine(
                winston.format.prettyPrint(),
                winston.format.errors({ stack: true }),
                winston.format.splat(),
                winston.format.colorize(),
                winston.format.simple(),
            ),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: `logs/${Levels.DEBUG}.log`, level: Levels.DEBUG }),
                new winston.transports.File({ filename: `logs/${Levels.ERROR}.log`, level: Levels.ERROR }),
                new winston.transports.File({ filename: `logs/${Levels.INFO}.log`, level: Levels.INFO }),
            ],
            // transports: [
            //     new winston.transports.Console({
            //         format: winston.format.combine(
            //             winston.format.colorize(),
            //             winston.format.timestamp(),
            //             winston.format.ms(),
            //             winston.format.printf((msg) => {
            //                 return `${msg.timestamp} [${moduleConfig}] [${msg.level}] - ${msg.message}`;
            //             }),
            //         ),
            //     }),
            // ],
        });
    }

    log(logComment: string): void {
        this.logger.debug(logComment);
    }

    info(logComment: string): void {
        this.logger.info(logComment);
    }

    warn(logComment: string): void {
        this.logger.warn(logComment);
    }

    error(logComment: string): void {
        this.logger.error(logComment);
    }
}
