import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'expo'})

export class Expo{
    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    username: string;
 
    @Column()
    password: string;

     @Column()
    createdAt: Date;

    @Column({ nullable: true})
    authStrategy: string;

}