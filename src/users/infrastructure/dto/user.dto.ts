import {ApiProperty} from "@nestjs/swagger";
import AddressDto from "./address.dto";

export class UserDto {
    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly firstName: string;

    @ApiProperty()
    readonly lastName: string;

    @ApiProperty()
    readonly alias: string;

    @ApiProperty()
    readonly address: AddressDto;
}
