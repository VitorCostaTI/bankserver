import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pix {
    @PrimaryGeneratedColumn()
    private id: Number;
}