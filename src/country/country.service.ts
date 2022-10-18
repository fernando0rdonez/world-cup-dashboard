import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountryService {
  countries = {};

  list() {
    return Object.values(this.countries);
  }

  add(createCountryDto: CreateCountryDto) {
    const id = uuidv4();
    const country = { id, ...createCountryDto };
    this.countries[id] = country;
    return country;
  }

  show(id: string) {
    const country = this.countries[id];
    if (country) {
      return country;
    }
    throw new BadRequestException();
  }

  update(id: string, updateCountryDto: UpdateCountryDto) {
    const country = this.countries[id];
    if (country) {
      const tempCountry = this.countries[id];
      this.countries[id] = { ...tempCountry, ...updateCountryDto };
      return this.countries[id];
    }
    throw new BadRequestException();
  }

  delete(id: string) {
    const country = this.countries[id];
    if (country) {
      delete this.countries[id];
      return { message: 'delete' };
    }
    throw new BadRequestException();
  }
}
