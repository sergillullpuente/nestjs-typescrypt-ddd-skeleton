import { ValueObject } from './value-object';
import { BadRequestException } from '@nestjs/common';

export abstract class StringValueObject extends ValueObject<string> {
    constructor(value: string) {
        super(value);
    }

    protected ensureValidValue(value: string): void {
        if (!value || value.trim().length === 0) {
            const className = this.constructor.name;
            throw new BadRequestException(`${className} cannot be empty or contain only whitespace`);
        }
    }
}
