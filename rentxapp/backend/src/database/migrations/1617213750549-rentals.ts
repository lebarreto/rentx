import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class rentals1617213750549 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rentals',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'car_id',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'client_id',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'start_date',
                        type: 'timestamp',
                        isNullable: false,
                    },
                    {
                        name: 'end_date',
                        type: 'timestamp',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ]
            })
        )

        await queryRunner.createForeignKey(
            'rentals',
            new TableForeignKey({
                name: 'RentalsCars',
                columnNames: ['car_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'cars',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        )

        await queryRunner.createForeignKey(
            'rentals',
            new TableForeignKey({
                name: 'RentalsClient',
                columnNames: ['client_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('rentals', 'RentalsCars');
        await queryRunner.dropForeignKey('rentals', 'RentalsClient');
        await queryRunner.dropTable('rentals');
    }
}