import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Conta {
    @PrimaryGeneratedColumn()
    private id: Number;
}