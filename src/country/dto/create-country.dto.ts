import { IsNumber, IsString } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  name: string;

  @IsString()
  conitnent: string;

  @IsNumber()
  delegates: number;

  @IsString()
  couch: string;
}
