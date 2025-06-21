import { EnumValueObject } from '../value-object/enum.value-object';

type Methods<T> = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    [P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

type MethodsAndProperties<T> = { [key in keyof T]: T[key] };

type Properties<T> = Omit<MethodsAndProperties<T>, Methods<T>>;

type ValueObjectValue<T> = {
    [key in keyof T]: T[key] extends { _value: unknown }
        ? Pick<T[key], '_value'>['_value']
        : T[key] extends EnumValueObject<infer U>
            ? U
            : T[key] extends Array<{ _value: unknown }>
                ? Pick<T[key][number], '_value'>['_value'][]
                : T[key] extends Array<object>
                    ? ToPrimitives<T[key][number]>[]
                    : T[key] extends object
                        ? ToPrimitives<T[key]>
                        : T[key];
};

export type ToPrimitives<T> = ValueObjectValue<Properties<T>>;
