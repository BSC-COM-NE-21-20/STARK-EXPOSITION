 
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";


@Entity()
export class Office {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    officename: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    officeemail: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    description: string;
}
