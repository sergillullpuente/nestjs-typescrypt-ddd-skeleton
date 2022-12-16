import {InvalidArgumentError} from "./invalid-argument.error";
import {Primitives} from "./value-object";

export abstract class EnumValueObject<T extends Primitives> {
    public static readonly MAX_LENGTH = 50;

    constructor(private readonly _value: T, private readonly validValues: T[]) {
        this.checkValueIsValid(_value);
    }

    public checkValueIsValid(value: T): void {
        if (!this.validValues.includes(value)) {
            this.throwErrorForInvalidValue(value);
        }

        const stringValue = `${value}`;
        if (!stringValue || stringValue.length === 0) {
            throw new InvalidArgumentError(`<${value}> should be a string`);
        }

        if (stringValue.length > EnumValueObject.MAX_LENGTH) {
            throw new InvalidArgumentError(`<${value}> should be shorter than ${EnumValueObject.MAX_LENGTH}`);
        }
    }

    public value(): T {
        return this._value;
    }

    equals(value: EnumValueObject<T>) {
        return this._value === value.value();
    }

    is(value: T) {
        return this._value === value;
    }

    protected abstract throwErrorForInvalidValue(value: T): void;
}
