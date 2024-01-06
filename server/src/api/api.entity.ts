import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity({ name: "USERS" })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPass() {
        this.password = await bcrypt.hash(this.password, 8)
    }
    
    async validatePass(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password)
    }
}