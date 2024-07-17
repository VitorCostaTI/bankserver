import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GerenteController } from 'src/controller/gerente/gerente.controller';
import { Gerente } from 'src/repository/Gerente';
import { GerenteService } from 'src/service/gerente/gerente.service';

@Module({
    imports: [TypeOrmModule.forFeature([Gerente])],
    providers: [GerenteService],
    controllers: [GerenteController]
})
export class GerenteModule {}
