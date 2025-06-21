import AddressCity from './value-objects/address-city.vo';
import AddressCountry from './value-objects/address-country.vo';
import AddressPostalCode from './value-objects/address-postal-code.vo';
import AddressLine from './value-objects/address-line.vo';
import AddressId from './value-objects/address-id.vo';
import { ToPrimitives } from '../../commons/src';

export default class Address {
    constructor(
        private _id: AddressId,
        private _addressLine: AddressLine,
        private _country: AddressCountry,
        private _city: AddressCity,
        private _postalCode: AddressPostalCode,
    ) {
    }

    get id(): AddressId {
        return this._id;
    }

    get addressLine(): AddressLine {
        return this._addressLine;
    }

    get country(): AddressCountry {
        return this._country;
    }

    get city(): AddressCity {
        return this._city;
    }

    get postalCode(): AddressPostalCode {
        return this._postalCode;
    }

    static create(
        addressLine: AddressLine,
        country: AddressCountry,
        city: AddressCity,
        postalCode: AddressPostalCode,
    ) {
        return new Address(
            AddressId.create(),
            addressLine,
            country,
            city,
            postalCode,
        );
    }

    toPrimitives(): ToPrimitives<Address> {
        return {
            id: this.id.value(),
            addressLine: this.addressLine.value(),
            country: this.country.value(),
            city: this.city.value(),
            postalCode: this.postalCode.value(),
        };
    }
}
