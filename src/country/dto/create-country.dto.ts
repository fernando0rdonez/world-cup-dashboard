import { IsNumber, IsString, Max, Min, MinLength } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  continent: string;

  @IsString()
  flag: string;

  @IsNumber()
  @Min(2)
  @Max(30)
  delegates: number;

  @IsString()
  couch: string;
}
