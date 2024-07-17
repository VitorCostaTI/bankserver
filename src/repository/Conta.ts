import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Extrato } from "./Extrato";
import { Pix } from "./Pix";

@Entity()
export class Conta {
    @PrimaryGeneratedColumn()
    private id: Number;

    @Column()
    private nome: string;

    @Column()
    private cpf: string;

    @Column()
    private email: string;

    @Column()
    private telefone: string;

    @Column()
    private limite_emprestimo: string;

    @Column()
    private faturamento: string;

    @Column()
    private despesa: string;

    @Column()
    private total: string;

    @Column()
    private logradouro: string;

    @Column()
    private bairro: string;

    @Column()
    private cidade: string;

    @Column()
    private estado: string;

    @Column()
    private complemento: string;

    @ManyToOne(() => Gerente, gerente => gerente.conta)
    private gerente: Gerente;

    @OneToMany(() => Cartao, cartao => cartao.conta)
    private cartao: Cartao[];

    @OneToMany(() => Extrato, extrato => extrato.conta)
    private extrato: Extrato[];

    @OneToMany(() => Pix, pix => pix.cona)
    private pix: Pix[];
}