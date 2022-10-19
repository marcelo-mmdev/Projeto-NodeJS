import { House } from './House';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('videos')
export class Video{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    title: string

    @Column({type: 'text'})
    url: string

    // relacionamento entre as etidades
    @ManyToOne(() => House, house => house.videos)
    @JoinColumn({name: 'house_id'})
    house: House
}