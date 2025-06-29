import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { WinstonLogger } from './commons/src/lib/logger/winston-logger.service';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
        }),
    )
    app.useLogger(new WinstonLogger())
    const options = new DocumentBuilder()
        .setTitle('[User]')
        .setDescription('MicroService Users')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);
    await app.listen(3000);
    Logger.log(
        '🚀 Application is running on: http://localhost:3000',
    );
}

bootstrap();
