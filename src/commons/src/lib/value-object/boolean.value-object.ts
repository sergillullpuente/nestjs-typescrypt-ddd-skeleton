import { ValueObject } from "./value-object";

export abstract class BooleanValueObject extends ValueObject<boolean> {
    constructor(value: boolean) {
        super(value);
    }
}
