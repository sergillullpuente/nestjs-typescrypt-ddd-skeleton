const {MigrationInterface, QueryRunner} = require("typeorm");

module.exports = class INITIAL1648380883789 {
    name = 'INITIAL1648380883789'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "address" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "addressLine" character varying(255) NOT NULL,
                "country" character varying(2) NOT NULL,
                "city" character varying(100) NOT NULL,
                "postalCode" character varying(5) NOT NULL,
                CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."users_status_enum" AS ENUM(
                'NEW',
                'PENDING',
                'PENDING_MANUAL',
                'KYC_ACCEPTED',
                'ACCEPTED',
                'DECLINED'
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "users" (
                "created_at" TIMESTAMP NOT NULL,
                "updated_at" TIMESTAMP NOT NULL,
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "email" character varying(100) NOT NULL,
                "status" "public"."users_status_enum" NOT NULL DEFAULT 'NEW',
                "first_name" character varying NOT NULL,
                "last_name" character varying NOT NULL,
                "alias" character varying NOT NULL,
                "address_id" uuid NOT NULL,
                CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            )
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "users" DROP CONSTRAINT "FK_1b05689f6b6456680d538c3d2ea"
        `);
        await queryRunner.query(`
            DROP TABLE "users"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."users_status_enum"
        `);
        await queryRunner.query(`
            DROP TABLE "address"
        `);
    }
}
