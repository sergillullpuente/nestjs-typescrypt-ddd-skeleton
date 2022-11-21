import { Module } from "@nestjs/common";
import { AddressModule } from "./address/address.module";
import { UserModule } from "./users/users.module";

@Module({
    imports: [
        AddressModule,
        UserModule
    ],
    controllers: [],
    providers: []
})
export class UsersModule {
}
