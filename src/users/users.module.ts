import { Module } from "@nestjs/common";
import { CreateUserController } from "./infrastructure/controller/create-user-controller";
import { CreateUserService } from "./application/create-user.service";

@Module({
    imports: [],
    controllers: [CreateUserController],
    providers: [CreateUserService]
})
export class UserModule {
}
