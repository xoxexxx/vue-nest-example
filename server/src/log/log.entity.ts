import { Entity, PrimaryGeneratedColumn, Column, } from "typeorm";

@Entity({ name: "LOG" })
export class Log {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: false })
    num: string;

    @Column('json', { nullable: true })
    ip: { 
        i: string, 
        co: string, 
        countrycode: string 
    };

    @Column('json', { nullable: true })
    browse: { 
        Edge: number, 
        Brave: number, 
        Opera: number, 
        Chrome: number, 
        Safari: number, 
        Firefox: number, 
        Vivaldi: number 
    };

    @Column({ unique: false })
    passwords: number;

    @Column('simple-array')
    wallets: string[];

    @Column({ unique: false })
    build: string;

    @Column({ unique: false })
    date: Date;

    @Column({ unique: false })
    port: string;

}


