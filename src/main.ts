import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import appConfig from 'src/config/app/appconfig'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist: true, transform: true}))
  await app.listen(appConfig.port);
}
bootstrap();
