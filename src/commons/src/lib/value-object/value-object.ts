export type Primitives = string | number | boolean | Date | Array<Primitives>;

export abstract class ValueObject<T extends Primitives> {
    constructor(private readonly _value: T) {
        this.ensureValueIsDefined(_value);
        this.ensureValidValue(_value);
    }

    private ensureValueIsDefined(value: T): void {
        if (this.isNullOrUndefined(value)) {
            throw new Error('Value must be defined');
        }
    }

    protected ensureValidValue(_value: T) {
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

    private isNullOrUndefined(value: any) {
        return value === undefined || value === null;
    }
}
