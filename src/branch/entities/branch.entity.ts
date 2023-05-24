import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity({ name: 'branch'})
export class Branch {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    branchName: string;

    @Column()
    location: string;

    @Column()
    description: string;
}
