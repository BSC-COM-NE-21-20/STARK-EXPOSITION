import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'agent'})
export class Agent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    
    @Column()
    username: string;

    
    @Column()
    email: string;

    
    @Column()
    password: string;

    
    @Column()
    checkInDate: Date;

    
    @Column()
    checkOutDate: Date;
}
