import { Module } from '@nestjs/common';
import { ContaModule } from './module/conta/conta.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PixModule } from './module/pix/pix.module';
import { ExtratoModule } from './module/extrato/extrato.module';
import { DatabaseConfig } from './Config/Database';

@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig),

    ContaModule,
    ExtratoModule,
    PixModule, 
  ],
})
export class AppModule {}
