import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Conta } from "src/repository/Conta";
import { Extrato } from "src/repository/Extrato";
import { Pix } from "src/repository/Pix";

export const DatabaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'vitorcosta',
    database: 'postgres',
    entities: [
        Conta,
        Extrato,
        Pix
    ],
    synchronize: true,
};