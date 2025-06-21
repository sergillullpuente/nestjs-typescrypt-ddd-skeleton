import { Injectable } from '@nestjs/common';
import User from '../domain/user';
import { QueryService } from '../../commons/src';
import { UserEntity } from '../infrastructure/persistence/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import UserId from '../domain/value-objects/user-id.vo';

export type GetUserServiceDefinition = QueryService<string, User>

@Injectable()
export class GetUserService implements GetUserServiceDefinition {
    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    ) {
    }

    async execute(id: string): Promise<User> {
        const userId = UserId.fromString(id)
        const user = await this.userRepository.findOne({ where: { id: userId.value() } })
        return user?.toModel();
    }
}
