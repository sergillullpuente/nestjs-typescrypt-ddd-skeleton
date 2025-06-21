import { BadRequestException } from '@nestjs/common';

export type Primitives = string | number | boolean | Date;

export abstract class ValueObject<T extends Primitives> {
    constructor(private readonly _value: T) {
        this.ensureValueIsDefined(_value);
        this.ensureValidValue(_value);
    }

    public value(): T {
        return this._value;
    }

    equals(other: ValueObject<T>): boolean {
        return (
            this.constructor.name === other.constructor.name
            && this.value() === other.value()
        );
    }

    toString(): string {
        return this.value.toString();
    }

    protected ensureValidValue(_value: T) {
    }

    private ensureValueIsDefined(value: T): void {
        if (this.isNullOrUndefined(value)) {
            const className = this.constructor.name;
            throw new BadRequestException(`${className} cannot be null or undefined`);
        }
    }

    private isNullOrUndefined(value: any) {
        return value === undefined || value === null;
    }
}
