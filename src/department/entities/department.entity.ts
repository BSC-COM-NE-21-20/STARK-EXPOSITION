
import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";


@Entity({ name: 'department'})
export class Department {
@PrimaryGeneratedColumn()

    id: number;

    @Column()
    departmentName: string;

    @Column()
    location: string;

    @Column()
    numberOfAssets: number;

    @Column()
    description: string;
}

