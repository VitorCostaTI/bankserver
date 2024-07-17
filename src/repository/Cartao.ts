import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Conta } from "./Conta";

@Entity()
export class Cartao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cartao: string;

    @Column()
    vencimento: string;

    @Column()
    cvc: string;

    @ManyToOne(() => Conta, conta => conta.cartao)
    conta: Conta
}