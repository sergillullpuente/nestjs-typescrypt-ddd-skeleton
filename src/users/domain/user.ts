import UserEmail from "./value-objects/user-email.vo";
import UserId from "./value-objects/user-id.vo";
import UserName from "./value-objects/user-name.vo";
import UserAlias from "./value-objects/user-alias.vo";
import Address from "../../address/domain/address";
import {ToPrimitives} from "../../commons/src";
import UserStatus from "./value-objects/user-status.vo";

export default class User {
    constructor(
        private readonly _id: UserId,
        private readonly _email: UserEmail,
        private readonly _firstName: UserName,
        private readonly _lastName: UserName,
        private readonly _alias: UserAlias,
        private readonly _address: Address,
        private readonly _status: UserStatus,
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

    get status(): UserStatus {
        return this._status;
    }

    static create(
        email: UserEmail,
        firstName: UserName,
        lastName: UserName,
        alias: UserAlias,
        address: Address,
    ): User {
        return new User(UserId.create(), email, firstName, lastName, alias, address, UserStatus.default());
    }

    fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    toPrimitives(): ToPrimitives<User> {
        return {
            id: this.id.value(),
            email: this.email.value(),
            firstName: this.firstName.value(),
            lastName: this.lastName.value(),
            alias: this.alias.value(),
            address: this.address.toPrimitives(),
            status: this.status.value(),
        };
    }
}
