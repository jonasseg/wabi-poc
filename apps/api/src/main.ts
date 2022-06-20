/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import { AppModule } from './app/app.module';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import { ValidationPipe } from '@nestjs/common';
import { CustomLogger } from './app/core/logger/custom-logger.helper';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    logger: new CustomLogger(),
    bodyParser: true,
  });
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT');
  const globalPrefix = 'api';
  app.useStaticAssets(join(__dirname, '..', 'resources'));

  app.use(helmet());
  app.use(compression());
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.setGlobalPrefix(globalPrefix);

  const options = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('document')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('document', app, document);

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
