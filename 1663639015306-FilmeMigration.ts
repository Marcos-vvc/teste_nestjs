import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class FilmeMigration1663639015306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'filmes',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'titulo',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'capa',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'cover',
                        type: 'varchar'
                    },
                    {
                        name: 'anoDeLancamento',
                        type: 'timestamp with time zone',
                        isNullable: false
                    },
                    {
                        name: 'generos',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'mediaIMDB',
                        type: 'float(2)',
                        isNullable: false
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('filmes')
    }

}
