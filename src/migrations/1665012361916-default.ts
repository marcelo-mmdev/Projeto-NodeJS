import { MigrationInterface, QueryRunner } from "typeorm";

export class default1665012361916 implements MigrationInterface {
    name = 'default1665012361916'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subject" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_12eee115462e38d62e5455fc054" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "house_subject" ("house_id" integer NOT NULL, "subject_id" integer NOT NULL, CONSTRAINT "PK_0d2c0bc99252ea085654bf49b5a" PRIMARY KEY ("house_id", "subject_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_52017577d7b748e442757ebf2a" ON "house_subject" ("house_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_94e6c8c28cfbdd12aa80e17eeb" ON "house_subject" ("subject_id") `);
        await queryRunner.query(`ALTER TABLE "house_subject" ADD CONSTRAINT "FK_52017577d7b748e442757ebf2ab" FOREIGN KEY ("house_id") REFERENCES "subject"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "house_subject" ADD CONSTRAINT "FK_94e6c8c28cfbdd12aa80e17eeb9" FOREIGN KEY ("subject_id") REFERENCES "houses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "house_subject" DROP CONSTRAINT "FK_94e6c8c28cfbdd12aa80e17eeb9"`);
        await queryRunner.query(`ALTER TABLE "house_subject" DROP CONSTRAINT "FK_52017577d7b748e442757ebf2ab"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_94e6c8c28cfbdd12aa80e17eeb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_52017577d7b748e442757ebf2a"`);
        await queryRunner.query(`DROP TABLE "house_subject"`);
        await queryRunner.query(`DROP TABLE "subject"`);
    }

}
