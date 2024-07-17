import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartaoController } from 'src/controller/cartao/cartao.controller';
import { Cartao } from 'src/repository/Cartao';
import { CartaoService } from 'src/service/cartao/cartao.service';

@Module({
    imports: [TypeOrmModule.forFeature([Cartao])],
    providers: [CartaoService],
    controllers: [CartaoController]
})
export class CartaoModule {}
