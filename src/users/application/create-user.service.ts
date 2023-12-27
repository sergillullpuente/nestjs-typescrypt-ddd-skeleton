import {Injectable} from "@nestjs/common";
import User from "../domain/user";
import Address from "../../address/domain/address";
import AddressLine from "../../address/domain/value-objects/address-line.vo";
import AddressCountry from "../../address/domain/value-objects/address-country.vo";
import AddressCity from "../../address/domain/value-objects/address-city.vo";
import AddressPostalCode from "../../address/domain/value-objects/address-postal-code.vo";
import UserAlias from "../domain/value-objects/user-alias.vo";
import UserName from "../domain/value-objects/user-name.vo";
import UserEmail from "../domain/value-objects/user-email.vo";
import {UserDto} from "../infrastructure/dto/user.dto";
import {UserEntity} from "../infrastructure/persistence/user.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {QueryService} from "../../commons/src";

export type CreateUserServiceDefinition = QueryService<UserDto, User>

@Injectable()
export class CreateUserService implements CreateUserServiceDefinition {

    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    ) {
    }

    async execute(userDto: UserDto): Promise<User> {
        const address = this.createAddress(userDto);
        const user = this.createUser(userDto, address);
        await this.userRepository.save(UserEntity.fromUser(user))
        return user;
    }

    private createUser(userDto: UserDto, address: Address) {
        return User.create(
            new UserEmail(userDto.email),
            new UserName(userDto.firstName),
            new UserName(userDto.lastName),
            new UserAlias(userDto.alias),
            address
        );
    }

    private createAddress(userDto: UserDto) {
        return Address.create(
            new AddressLine(userDto.address.addressLine),
            new AddressCountry(userDto.address.country),
            new AddressCity(userDto.address.city),
            new AddressPostalCode(userDto.address.postalCode)
        );
    }
}
