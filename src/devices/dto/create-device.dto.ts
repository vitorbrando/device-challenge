import {
    IsNotEmpty,
    IsString,
    IsUUID,
    MaxLength,
} from 'class-validator';

export class CreateDeviceDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    label: string;
  
    @IsString()
    @MaxLength(300)
    description: string;
}