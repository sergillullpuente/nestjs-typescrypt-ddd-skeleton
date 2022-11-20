import { ValueObject } from './value-object';

export enum TimeUnit {
    WEEK = 1000 * 60 * 60 * 24 * 7,
    DAY = 1000 * 60 * 60 * 24,
    HOUR = 1000 * 60 * 60,
    MINUTE = 1000 * 60,
    SECONDS = 1000,
}

export abstract class DateValueObject extends ValueObject<Date> {
    constructor(value: Date) {
        super(value);
    }

    valueTimestamp(): number {
        return this.value().getTime();
    }

    toStringOnlyDate() {
        return `${this.value().getFullYear()}-${(this.value().getMonth() + 1).toString().padStart(2, '0')}-${(this.value().getDate())
            .toString()
            .padStart(2, '0')}`;
    }

    toString() {
        return `${this.toStringOnlyDate()} ${this.value().getHours()
            .toString()
            .padStart(2, '0')}:${this.value().getMinutes()
            .toString()
            .padStart(2, '0')}`;
    }

    isMoreThanAgo(difference: number, unit: TimeUnit): boolean {
        const now = new Date();
        const diffTime = now.getTime() - this.value().getTime();
        const diffMetric = Math.ceil(diffTime / unit);
        return diffMetric > difference;
    }

    timeBetween(unit: TimeUnit, date: Date = new Date()): number {
        const diffTime = date.getTime() - this.value().getTime();
        const diffMetric = Math.ceil(diffTime / unit);
        return Math.abs(diffMetric)
    }
}
