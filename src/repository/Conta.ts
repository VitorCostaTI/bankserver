import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cartao } from "./Cartao";
import { Extrato } from "./Extrato";
import { Gerente } from "./Gerente";
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

    @OneToMany(() => Cartao, cartao => cartao.conta)
    cartao: Cartao[];

    @OneToMany(() => Extrato, extrato => extrato.conta)
    extrato: Extrato[];

    @ManyToOne(() => Gerente, gerente => gerente.conta)
    gerente: Gerente;

    @OneToMany(() => Pix, pix => pix.conta)
    pix: Pix[];
}