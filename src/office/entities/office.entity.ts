 
import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";


@Entity({ name: 'office'})
export class Office {
    @PrimaryGeneratedColumn()

    id: number;

    @Column()
    officeName: string;

    @Column()
    officeEmail: string;

    @Column()
    password: string;

    @Column()
    description: string;
}
