import { Entity, PrimaryGeneratedColumn, Column, } from "typeorm";

@Entity({ name: "SET" })
export class Set {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: false })
    num: string;

    @Column({ unique: false })
    ip: string;

    @Column({ unique: false })
    browse: string;

    @Column({ unique: false })
    passwords: number;

    @Column({ unique: false })
    wallets: number;

    @Column({ unique: false })
    build: number;

    @Column({ unique: false })
    date: Date

}