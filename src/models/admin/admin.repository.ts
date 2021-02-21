import { classToPlain, plainToClass } from "class-transformer";
import { EntityRepository } from "typeorm";
import { ModelRepository } from "../model.repository";
import { AdminEntity } from "./entities/admin.entity";
import { Admin } from "./serializers/admin.serializer";

@EntityRepository(AdminEntity)
export class AdminRepository extends ModelRepository<AdminEntity, Admin> {

  transform(model: AdminEntity): Admin {
    return plainToClass(Admin, model);
  }
  
  transformMany(models: AdminEntity[]): Admin[] {
    return models.map(model => this.transform(model));
  }
}