import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get()
  listCountries() {
    return this.countryService.list();
  }

  @Get('/:id')
  show(@Param('id', ParseUUIDPipe) id: string) {
    return this.countryService.show(id);
  }

  @Post()
  add(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.add(createCountryDto);
  }

  @Put('/:id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ) {
    return this.countryService.update(id, updateCountryDto);
  }

  @Delete('/:id')
  deleteCountry(@Param('id', ParseUUIDPipe) id: string) {
    return this.countryService.delete(id);
  }
}
