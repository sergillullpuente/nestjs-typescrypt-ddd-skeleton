import { UserRepository } from '../../domain/user.repository';
import { DataSource, QueryRunner, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import User from '../../domain/user';
import UserId from '../../domain/value-objects/user-id.vo';
import { Criteria } from 'src/commons/src/lib/criteria/criteria';

export class TypeormUserRepository implements UserRepository {
    constructor(private readonly connection: DataSource) {
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

    async matching(criteria: Criteria): Promise<User[]> {
        // const users = await this.repository.find(criteria);
        // return users.map((user) => user.toModel());
        throw new Error('Method not implemented.');
    }

    async delete(id: UserId): Promise<void> {
        await this.repository.delete(id.value());
    }
}
