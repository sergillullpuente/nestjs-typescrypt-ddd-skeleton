import {EnumValueObject} from "../../../commons/src/lib/value-object/enum.value-object";
import {UserStatusEnum} from "./user-status.enum";
import {InvalidArgumentError} from "../../../commons/src";

export default class UserStatus extends EnumValueObject<UserStatusEnum> {
    constructor(
        value: UserStatusEnum,
    ) {
        super(
            value,
            Object.values(UserStatusEnum),
        );
    }

    static default(): UserStatus {
        return new UserStatus(UserStatusEnum.NEW)
    }

    protected throwErrorForInvalidValue(value: UserStatusEnum): void {
        throw new InvalidArgumentError(`value ${value} is not valid to ${UserStatus.name}`)
    }

}
