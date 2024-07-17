import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContaController } from 'src/controller/conta/conta.controller';
import { Conta } from 'src/repository/Conta';
import { ContaService } from 'src/service/conta/conta.service';

@Module({
    imports: [TypeOrmModule.forFeature([Conta])],
    providers: [ContaService],
    controllers: [ContaController]
})
export class ContaModule {}
