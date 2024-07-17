import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Conta } from "./Conta";

@Entity()
export class Pix {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    chave: string;

    @Column()
    categoria: string;

    @Column()
    data: Date;

    @ManyToOne(() => Conta, conta => conta.pix)
    conta: Conta;

}