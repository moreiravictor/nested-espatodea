import { Exclude, Expose } from "class-transformer";
import { Model } from "src/common/serializers/model.serializer";
import { ObjectID } from "typeorm";
import { IAdmin } from "../interfaces/admin.interface";

export class Admin extends Model implements IAdmin {
    
    _id: ObjectID

    username: string

    @Exclude()
    password:  string

    name: string
}