import { ApiProperty } from '@nestjs/swagger';
import { IsISO31661Alpha2, IsNotEmpty, IsString } from 'class-validator';

export class AddressDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly addressLine: string;

    @ApiProperty()
    @IsISO31661Alpha2()
    @IsNotEmpty()
    readonly country: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly city: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly postalCode: string;
}
