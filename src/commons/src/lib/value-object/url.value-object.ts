import { StringValueObject } from './string.value-object';
import { InvalidArgumentError } from './invalid-argument.error';

export class UrlValueObject extends StringValueObject {
    protected ensureValidValue(url: string) {
        if (!this.isValidUrl()) {
            throw new InvalidArgumentError(`Invalid url <${url}>`);
        }
    }

    private isValidUrl() {
        return String(this.value())
            .toLowerCase()
            .match(
                // eslint-disable-next-line prefer-named-capture-group
                /^(http(s)?:\/\/)?([-a-zA-Z0-9_]{2,256}\.)?[-a-zA-Z0-9_]{2,256}\.[a-z]{2,256}\b([-a-zA-Z0-9@:%_+.~#?&=/]*)$/,
            );
    }
}
