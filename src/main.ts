import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { CountryModule } from './country/country.module';

async function bootstrap() {
  const app = await NestFactory.create(CountryModule);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
