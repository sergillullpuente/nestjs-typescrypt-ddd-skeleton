import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { Logger } from "@nestjs/common";
import { UsersModule } from "./users.module";

async function bootstrap() {
    const app = await NestFactory.create(UsersModule);
    const options = new DocumentBuilder()
        .setTitle("[User]")
        .setDescription("MicroService Users")
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup("docs", app, document);
    await app.listen(3000);
    Logger.log(
        "🚀 Application is running on: http://localhost:3000"
    );
}

bootstrap();
