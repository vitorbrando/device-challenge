import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateVariableDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  value: string;

  @IsNotEmpty()
  device: string;
}
