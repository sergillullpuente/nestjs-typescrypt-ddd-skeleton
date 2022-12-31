module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'password',
    database: 'ms-users',
    entities: ['./**/*.entity{.ts,.js}'],
    migrations: ['./migrations/**/*{.ts,.js}'],
    cli: {
        entitiesDir: './**/*.entity{.ts,.js}',
        migrationsDir: 'src/migrations',
    },
};
