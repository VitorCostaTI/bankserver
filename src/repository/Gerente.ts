import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Conta } from "./Conta";

@Entity()
export class Gerente {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    email: string;

    @Column()
    telefone: string;

    @Column()
    logradouro: string;

    @Column()
    bairro: string;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @Column()
    complemento: string;

    @OneToMany(() => Conta, conta => conta.gerente)
    conta: Conta[];
}