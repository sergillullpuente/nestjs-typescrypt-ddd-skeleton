import { ApiProperty } from '@nestjs/swagger';
import { AddressDto } from './address.dto';
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UserDto {
    @ApiProperty()
    @IsEmail()
    readonly email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly firstName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly lastName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly alias: string;

    @ApiProperty()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => AddressDto)
    readonly address: AddressDto;
}
