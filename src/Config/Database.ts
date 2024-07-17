import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Cartao } from "src/repository/Cartao";
import { Conta } from "src/repository/Conta";
import { Extrato } from "src/repository/Extrato";
import { Gerente } from "src/repository/Gerente";
import { Pix } from "src/repository/Pix";

export const DatabaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'vitorcosta',
    database: 'postgres',
    entities: [
        Cartao,
        Conta,
        Extrato,
        Gerente,
        Pix
    ],
    synchronize: true,
};