import { Entity, PrimaryGeneratedColumn, Column }  from "typeorm";
@Entity({ name: "T" })
export class T {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    log: string;

    @Column()
    val: string;
     
}