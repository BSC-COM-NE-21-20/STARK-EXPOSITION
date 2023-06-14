
import { IsNotEmpty, IsString } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";


@Entity()
export class Department {
@PrimaryGeneratedColumn()

    id: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    departmentname: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    location: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    numberOfAssets: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    description: string;
}

