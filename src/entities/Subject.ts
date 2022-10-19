import { House } from './House';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('subject')
export class Subject {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @ManyToMany(() => House, house => house.subjects)
    @JoinTable({
        name: 'house_subject',
        joinColumn: {
            name: 'house_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'subject_id',
            referencedColumnName: 'id'
        }
    })
    houses: House[]
}