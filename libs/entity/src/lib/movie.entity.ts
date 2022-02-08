import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    date: string;

    @Column()
    image: string;
    
    @Column()
    rating: string;
}