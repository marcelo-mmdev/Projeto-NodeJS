import { Subject } from './Subject';
import { Video } from './Video';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('houses')
export class House{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @Column({type: 'text', nullable: true})
    description: string

    // relacionamento entre as etidades
    @OneToMany(() => Video, video => video.house)
    videos: Video[]

    @ManyToMany(() => Subject, subject => subject.houses)
    subjects: Subject[]
}