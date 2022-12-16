import {InvalidArgumentError, StringValueObject} from "../../../commons/src";

export default class AddressCountry extends StringValueObject {
    private static readonly ISO_3166_1_LENGTH = 2;

    constructor(value: string) {
        super(value);
    }

    protected ensureValidValue(_value: string) {
        super.ensureValidValue(_value);
        if (_value.length !== AddressCountry.ISO_3166_1_LENGTH) {
            throw new InvalidArgumentError(`Invalid value to ${AddressCountry.name}. Received: ${_value}, max ISO_3166 length is ${AddressCountry.ISO_3166_1_LENGTH}`);
        }
    }
}
