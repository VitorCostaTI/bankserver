import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Conta } from "./Conta";

@Entity()
export class Extrato {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    valor: Number;

    @Column()
    data: Date;

    @ManyToOne(() => Conta, conta => conta.extrato)
    conta: Conta;
}