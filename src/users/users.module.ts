import {Module, Provider} from "@nestjs/common";
import {CreateUserController} from "./infrastructure/controller/create-user-controller";
import {CreateUserService} from "./application/create-user.service";
import {USER_REPOSITORY} from "./user.constants";
import {TypeormUserRepository} from "./infrastructure/persistence/typeorm.user.repository";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./infrastructure/persistence/user.entity";
import {GetUserController} from "./infrastructure/controller/get-user-controller";

export const userRepository: Provider = {
    provide: USER_REPOSITORY,
    useClass: TypeormUserRepository,
};

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
    ],
    controllers: [CreateUserController, GetUserController],
    providers: [CreateUserService, userRepository]
})
export class UserModule {
}
