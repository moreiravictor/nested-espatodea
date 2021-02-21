import { ObjectID } from "typeorm";

export interface IAdmin {
    _id: ObjectID
    name: string
    username: string
    password: string
}