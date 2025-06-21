import { ValueObject } from './value-object';
import { InvalidArgumentError } from './invalid-argument.error';
import { v4, validate } from 'uuid';

export class Uuid extends ValueObject<string> {
    static create(): Uuid {
        return new Uuid(v4());
    }

    protected ensureValidValue() {
        if (!validate(this.value())) {
            throw new InvalidArgumentError(
                `<${this.constructor.name}> does not allow the value <${this.value()}>`,
            );
        }
    }
}
