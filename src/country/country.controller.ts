import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('country')
export class CountryController {
  @Get()
  listCountries() {
    return [];
  }

  @Get('/:id')
  showCountry() {
    return 'single country';
  }

  @Post()
  createCountry() {
    return 'add';
  }

  @Delete('/:id')
  deleteCountry() {
    return 'delete';
  }
}
