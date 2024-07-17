import { Module } from '@nestjs/common';

import { DatabaseConfig } from './Config/Database';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CartaoModule } from './module/cartao/cartao.module';
import { ContaModule } from './module/conta/conta.module';
import { ExtratoModule } from './module/extrato/extrato.module';
import { GerenteModule } from './module/gerente/gerente.module';
import { PixModule } from './module/pix/pix.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig),

    CartaoModule,
    ContaModule,
    ExtratoModule,
    GerenteModule,
    PixModule,
  ],
})

export class AppModule { }
