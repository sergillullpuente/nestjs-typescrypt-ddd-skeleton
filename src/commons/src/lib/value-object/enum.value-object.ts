import { InvalidArgumentError } from "./invalid-argument.error";

export abstract class EnumValueObject<T> {
	public static readonly MAX_LENGTH = 50;

	private readonly _value: T;

	protected constructor(value: T, public readonly validValues: T[]) {
		this._value = value;
		this.checkValueIsValid(value);
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

	value(): T {
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
