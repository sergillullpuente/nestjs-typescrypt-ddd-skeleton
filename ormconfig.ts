import {TypeOrmModuleOptions} from "@nestjs/typeorm";

const {TypeOrmDataSource} = require('@nestjs/typeorm');
const {createConnection} = require('typeorm');

const options: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'username',
    password: 'password',
    database: 'database',
    entities: [__dirname + '/**/*.entity.{ts,js}'],
    migrations: [__dirname + '/migrations/*.{ts,js}'],
};

const connection = createConnection(options);

module.exports = new TypeOrmDataSource(connection);
