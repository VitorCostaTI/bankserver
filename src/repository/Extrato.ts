import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Extrato {
    @PrimaryGeneratedColumn()
    private id: Number;
}