import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateLinks1663514784976 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "links",
                columns: [
                    {
                        name: "id",
                        type: 'integer',
                        isPrimary: true,
                        isGenerated:true,
                        generationStrategy:'increment'
                    },
                    {
                        name: "label",
                        type: 'varchar',
                    },
                    {
                        name: "url",
                        type: 'varchar',
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },

                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("links");
    }

}
