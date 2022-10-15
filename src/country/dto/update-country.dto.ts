import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCountryDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  conitnent: string;

  @IsNumber()
  @IsOptional()
  delegates: number;

  @IsString()
  @IsOptional()
  couch: string;
}
