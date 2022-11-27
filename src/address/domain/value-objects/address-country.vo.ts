import { InvalidArgumentError, StringValueObject } from "@commons";

export default class AddressCountry extends StringValueObject {
    private static readonly ISO_3166_1_LENGTH = 2;

    constructor(value: string) {
        super(value);
    }

    protected ensureValidValue(_value: string) {
        super.ensureValidValue(_value);
        if (_value.length !== AddressCountry.ISO_3166_1_LENGTH) {
            throw new InvalidArgumentError(`<${_value}> is a invalid value to country`);
        }
    }
}