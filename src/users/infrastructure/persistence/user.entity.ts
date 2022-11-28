import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import User from "../../domain/user";
import UserId from "../../domain/value-objects/user-id.vo";
import UserEmail from "../../domain/value-objects/user-email.vo";
import UserAlias from "../../domain/value-objects/user-alias.vo";
import UserName from "../../domain/value-objects/user-name.vo";
import {BaseEntity} from "../../../commons/src"
import {AddressEntity} from "../../../address/infrastructure/persistence/address.entity";

@Entity('users')
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;
    @Column({
        length: 100,
        unique: true,
    })
    readonly email: string;
    @Column({
        name: 'first_name',
    })
    readonly firstName: string;
    @Column({
        name: 'last_name',
    })
    readonly lastName: string;
    @Column({
        name: 'alias',
        nullable: true,
    })
    readonly alias: string;
    @ManyToOne(
        () => AddressEntity,
        (address) => address.id,
        {
            cascade: true,
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
            nullable: false,
            persistence: true,
            orphanedRowAction: 'delete',
            eager: true,
        },
    )
    @JoinColumn({
        name: 'address_id',
        referencedColumnName: 'id',
    })
    readonly address: AddressEntity;

    constructor(
        id: string,
        email: string,
        firstName: string,
        lastName: string,
        alias: string,
        address: AddressEntity,
    ) {
        super();
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.alias = alias;
        this.address = address;
    }

    static fromUser(user: User): UserEntity {
        return new UserEntity(
            user.id.value(),
            user.email.value(),
            user.firstName.value(),
            user.lastName.value(),
            user.alias?.value() ?? null,
            AddressEntity.fromAddress(user.address),
        );
    }

    toModel(): User {
        return new User(
            new UserId(this.id),
            new UserEmail(this.email),
            new UserName(this.firstName),
            new UserName(this.lastName),
            this.alias ? new UserAlias(this.alias) : undefined,
            this.address.toModel(),
        );
    }
}