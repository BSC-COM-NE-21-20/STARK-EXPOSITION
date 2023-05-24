import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user'})

export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true})
    firstname: string;

    @Column({ nullable: true})
    lastname: string;

    @Column({ nullable: true})
    username: string;

    @Column({ nullable: true})
    email: string;

    @Column({ nullable: true})
    password: string;
 
    @Column({ nullable: true})
    createdAt: Date;

    @Column({ nullable: true})
    authStrategy: string;

    @Column({ default: true })
    isActive: boolean;
}
