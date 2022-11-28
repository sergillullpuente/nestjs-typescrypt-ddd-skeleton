import {InvalidArgumentError, StringValueObject} from "../../../commons/src";

export default class AddressPostalCode extends StringValueObject {
    private static readonly POSTAL_CODE_REGEX: RegExp
                                = /^(?<province>[1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;

    constructor(value: string) {
        super(value.trim());
    }

    protected ensureValidValue(_value: string) {
        super.ensureValidValue(_value);
        if (!this.isValidPostalCode(_value)) {
            throw new InvalidArgumentError(`<${_value}> is a invalid value to postal code`);
        }
    }

    protected isValidPostalCode(_value: string): boolean {
        return AddressPostalCode.POSTAL_CODE_REGEX.test(_value);
    }
}
