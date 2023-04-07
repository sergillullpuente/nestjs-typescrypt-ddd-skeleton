import {Module} from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm';
import {AddressModule} from "./address/address.module";
import {UserModule} from "./users/users.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'user',
            password: 'password',
            database: 'database',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            autoLoadEntities: true,
            synchronize: true,
        }),
        AddressModule,
        UserModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {
}
