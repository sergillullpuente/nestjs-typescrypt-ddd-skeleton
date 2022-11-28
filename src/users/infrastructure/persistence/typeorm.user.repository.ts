import {UserRepository} from "../../domain/user.repository";
import {Connection, QueryRunner, Repository} from "typeorm";
import {UserEntity} from "./user.entity";
import User from "../../domain/user";
import UserId from "../../domain/value-objects/user-id.vo";

export class TypeormUserRepository implements UserRepository {
    constructor(private readonly connection: Connection) {
    }

    private _queryRunner?: QueryRunner;

    get queryRunner(): QueryRunner {
        if (!this._queryRunner || this._queryRunner.isReleased) {
            this._queryRunner = this.connection.createQueryRunner();
        }
        return this._queryRunner;
    }

    get repository(): Repository<UserEntity> {
        return this.queryRunner.manager.getRepository<UserEntity>(UserEntity)
    }

    async findAll(): Promise<User[]> {
        const users = await this.repository.find();
        return users.map((user) => user.toModel());
    }

    async save(user: User): Promise<void> {
        await this.repository.save(UserEntity.fromUser(user));
    }

    async delete(id: UserId): Promise<void> {
        await this.repository.delete(id.value());
    }
}
