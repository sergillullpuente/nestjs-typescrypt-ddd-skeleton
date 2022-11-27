import UserEmail from "./value-objects/user-email.vo";
import UserId from "./value-objects/user-id.vo";
import UserName from "./value-objects/user-name.vo";
import UserAlias from "./value-objects/user-alias.vo";
import Address from "../../address/domain/address";

export default class User {
    constructor(
        private readonly _id: UserId,
        private readonly _email: UserEmail,
        private readonly _firstName: UserName,
        private readonly _lastName: UserName,
        private readonly _alias: UserAlias,
        private readonly _address: Address
    ) {
    }

    get id(): UserId {
        return this._id;
    }

    get email(): UserEmail {
        return this._email;
    }

    get firstName(): UserName {
        return this._firstName;
    }

    get lastName(): UserName {
        return this._lastName;
    }

    get alias(): UserAlias {
        return this._alias;
    }

    get address(): Address {
        return this._address;
    }

    static create(
        email: UserEmail,
        firstName: UserName,
        lastName: UserName,
        alias: UserAlias,
        address: Address
    ): User {
        return new User(UserId.create(), email, firstName, lastName, alias, address);
    }

    fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    toPrimitives() {
        return {
            id: this.id.value(),
            email: this.email.value(),
            firstName: this.firstName.value(),
            lastName: this.lastName.value(),
            alias: this.alias.value(),
            address: this.address.toPrimitives()
        };
    }
}
