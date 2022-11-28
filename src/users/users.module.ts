import {Module, Provider} from "@nestjs/common";
import {CreateUserController} from "./infrastructure/controller/create-user-controller";
import {CreateUserService} from "./application/create-user.service";
import {USER_REPOSITORY} from "./user.constants";
import {TypeormUserRepository} from "./infrastructure/persistence/typeorm.user.repository";

export const userRepository: Provider = {
    provide: USER_REPOSITORY,
    useClass: TypeormUserRepository,
};

@Module({
    imports: [],
    controllers: [CreateUserController],
    providers: [CreateUserService, userRepository]
})
export class UserModule {
}
