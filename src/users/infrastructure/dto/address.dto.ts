import {ApiProperty} from "@nestjs/swagger";

export default class AddressDto {
    @ApiProperty()
    readonly addressLine: string;

    @ApiProperty()
    readonly country: string;

    @ApiProperty()
    readonly city: string;

    @ApiProperty()
    readonly postalCode: string;
}
