import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import Address from '../../domain/address';
import AddressId from '../../domain/value-objects/address-id.vo';
import AddressLine from '../../domain/value-objects/address-line.vo';
import AddressCountry from '../../domain/value-objects/address-country.vo';
import AddressCity from '../../domain/value-objects/address-city.vo';
import AddressPostalCode from '../../domain/value-objects/address-postal-code.vo';

@Entity('address')
export class AddressEntity {
    @PrimaryGeneratedColumn(
        'uuid',
    )
    readonly id: string;

    @Column('varchar', {
        length: 255,
    })
    readonly addressLine: string;

    @Column('varchar', {
        length: 2,
    })
    readonly country: string;

    @Column('varchar', {
        length: 100,
    })
    readonly city: string;

    @Column('varchar', {
        length: 5,
    })
    readonly postalCode: string;

    constructor(
        id: string,
        addressLine: string,
        country: string,
        city: string,
        postalCode: string,
    ) {
        this.id = id;
        this.addressLine = addressLine;
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
    }

    static fromAddress(address: Address): AddressEntity {
        return new AddressEntity(
            address.id.value(),
            address.addressLine.value(),
            address.country.value(),
            address.city.value(),
            address.postalCode.value(),
        );
    }

    toModel(): Address {
        return new Address(
            new AddressId(this.id),
            new AddressLine(this.addressLine),
            new AddressCountry(this.country),
            new AddressCity(this.city),
            new AddressPostalCode(this.postalCode)
        );
    }
}
