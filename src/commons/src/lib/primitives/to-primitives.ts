/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/ban-types */

import {EnumValueObject} from "../value-object/enum.value-object";

type Methods<T> = {
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
                : T[key] extends Array<Object>
                    ? ToPrimitives<T[key][number]>[]
                    : T[key] extends Object
                        ? ToPrimitives<T[key]>
                        : T[key];
};

export type ToPrimitives<T> = ValueObjectValue<Properties<T>>;
