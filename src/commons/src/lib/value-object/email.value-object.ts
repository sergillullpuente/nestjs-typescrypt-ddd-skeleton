import { StringValueObject } from './string.value-object';
import { InvalidArgumentError } from './invalid-argument.error';

export class EmailValueObject extends StringValueObject {
    public static readonly MAX_LENGTH = 100;

    protected ensureValidValue(email: string) {
        if (!this.isValidEmail()) {
            throw new InvalidArgumentError(`Invalid email <${email}>`);
        }
    }

    private isValidEmail() {
        return String(this.value())
            .toLowerCase()
            .match(
                // eslint-disable-next-line max-len,prefer-named-capture-group
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );
    }
}
