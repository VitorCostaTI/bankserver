import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PixController } from 'src/controller/pix/pix.controller';
import { Pix } from 'src/repository/Pix';
import { PixService } from 'src/service/pix/pix.service';

@Module({
    imports: [TypeOrmModule.forFeature([Pix])],
    providers: [PixService],
    controllers: [PixController]
})

export class PixModule {}
