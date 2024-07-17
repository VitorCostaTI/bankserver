import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExtratoController } from 'src/controller/extrato/extrato.controller';
import { Extrato } from 'src/repository/Extrato';
import { ExtratoService } from 'src/service/extrato/extrato.service';

@Module({
    imports: [TypeOrmModule.forFeature([Extrato])],
    providers: [ExtratoService],
    controllers: [ExtratoController]
})
export class ExtratoModule { }
