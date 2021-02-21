import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { IAdmin } from "../interfaces/admin.interface";

@Entity({name: 'admin'})
export class AdminEntity {

    @ObjectIdColumn()
    _id: ObjectID

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    name: string

}