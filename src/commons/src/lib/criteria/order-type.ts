import { EnumValueObject } from '../value-object/enum.value-object';
import { InvalidArgumentError } from '../value-object';

export enum OrderTypes {
    ASC = 'asc',
    DESC = 'desc',
    NONE = 'none'
}

export class OrderType extends EnumValueObject<OrderTypes> {
    constructor(value: OrderTypes) {
        super(value, Object.values(OrderTypes));
    }

    protected throwErrorForInvalidValue(value: OrderTypes): void {
        throw new InvalidArgumentError(`The order type ${value} is invalid`);
    }
}
