import {MigrationInterface, QueryRunner,TableColumn} from "typeorm";

export class addImageToCars1617220080092 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'cars',
            new TableColumn({
              name: 'image',
              type: 'varchar',
              isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('cars', 'image');
    }

}
