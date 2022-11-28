import { isIPv4, isIPv6 } from 'net';
import { StringValueObject } from './string.value-object';
import { InvalidArgumentError } from './invalid-argument.error';

export class IpValueObject extends StringValueObject {
    protected ensureValidValue(ip: string) {
        super.ensureValidValue(ip);

        if (!this.isValidIp()) {
            throw new InvalidArgumentError(`IP <${ip}> is not in the correct format IPv6 or IPv4.`)
        }
    }

    private isValidIp(): boolean {
        return isIPv6(this.value()) || isIPv4(this.value())
    }
}
