import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';

@Module({
  controllers: [CountryController],
})
export class CountryModule {}
