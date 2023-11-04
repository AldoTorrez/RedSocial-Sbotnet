import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

enum Gender {
    HOMBRE = 'hombre',
    MUJER = 'mujer',
    NO_BINARIO = 'no binario',
    OTRO = 'otro',
    VACIO = ''
}

@Entity('users')
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    username: string

    @Column()
    name: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @Column({type: 'datetime'})
    registrationDate: string

    @Column({type: 'datetime'})
    lastSession: string

    @Column({type: 'date'})
    dateOfBirth: string

    @Column({type: 'enum', enum:Gender, default: Gender.VACIO})
    gender: Gender;

    @Column()
    profilePicture: string
}