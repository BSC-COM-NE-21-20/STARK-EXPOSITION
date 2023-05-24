import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";


@Entity({ name: 'customer'})
export class Customer {
    @PrimaryGeneratedColumn()

    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    description: string;
}
