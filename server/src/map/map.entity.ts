import { Entity, PrimaryGeneratedColumn, Column }  from "typeorm";

@Entity({ name: "MAP" })
export class Map {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    country: string;
    
    @Column({ unique: true })
    length: string;

}