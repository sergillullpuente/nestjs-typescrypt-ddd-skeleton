import { Injectable } from "@nestjs/common";
import { QueryService } from "@commons";
import { UserDto } from "../infrastructure/controller/create-user-controller";
import User from "../domain/user";
import Address from "../../address/domain/address";
import AddressLine from "../../address/domain/value-objects/address-line.vo";
import AddressCountry from "../../address/domain/value-objects/address-country.vo";
import AddressCity from "../../address/domain/value-objects/address-city.vo";
import AddressPostalCode from "../../address/domain/value-objects/address-postal-code.vo";
import UserAlias from "../domain/value-objects/user-alias.vo";
import UserName from "../domain/value-objects/user-name.vo";
import UserEmail from "../domain/value-objects/user-email.vo";

export type CreateUserServiceDefinition = QueryService<UserDto, User>

@Injectable()
export class CreateUserService implements CreateUserServiceDefinition {
    async execute(userDto: UserDto): Promise<User> {
        const address = this.getAddress(userDto);
        return this.getUser(userDto, address);
    }

    private getUser(userDto: UserDto, address: Address) {
        return User.create(
            new UserEmail(userDto.email),
            new UserName(userDto.firstName),
            new UserName(userDto.lastName),
            new UserAlias(userDto.alias),
            address
        );
    }

    private getAddress(userDto: UserDto) {
        return Address.create(
            new AddressLine(userDto.address.addressLine),
            new AddressCountry(userDto.address.country),
            new AddressCity(userDto.address.city),
            new AddressPostalCode(userDto.address.postalCode)
        );
    }
}
