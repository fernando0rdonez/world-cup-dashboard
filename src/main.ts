import { NestFactory } from '@nestjs/core';
import { CountryModule } from './country/country.module';

async function bootstrap() {
  const app = await NestFactory.create(CountryModule);
  await app.listen(3000);
}
bootstrap();
