import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664998577832 implements MigrationInterface {
    name = 'default1664998577832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "houses" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "houses" DROP COLUMN "description"`);
    }

}
