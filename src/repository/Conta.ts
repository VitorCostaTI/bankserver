import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Extrato } from "./Extrato";
import { Pix } from "./Pix";

@Entity()
export class Conta {
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
    limite_emprestimo: string;

    @Column()
    faturamento: string;

    @Column()
    despesa: string;

    @Column()
    total: string;

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

    @ManyToOne(() => Gerente, gerente => gerente.conta)
    gerente: Gerente;

    @OneToMany(() => Cartao, cartao => cartao.conta)
    cartao: Cartao[];

    @OneToMany(() => Extrato, extrato => extrato.conta)
    extrato: Extrato[];

    @OneToMany(() => Pix, pix => pix.conta)
    pix: Pix[];
}