import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AdminDTO } from "./dto/AdminDTO";
import { Admin } from "./entities/admin.entity";
import { AdminEntity } from "./serializers/admin.serializer";

@Injectable()
export class AdminService {
    constructor(@InjectRepository(Admin) private readonly repository: Repository<Admin>) {}

    async get(id: string, relations: string[] = [], throwsException = false): Promise<Admin | null> {
        return this.repository.findOne(id)
        // return await this.repository.get(id, relations, throwsException)
    }

    async getAll(): Promise<Admin[]> {
        return this.repository.find()
        // return await this.repository.get(id, relations, throwsException)
    }

    // async create(inputs: AdminDTO): Promise<AdminEntity> {
    //     return await this.repository.createEntity(inputs);
    // }
    
    // async update(inputs: AdminDTO): Promise<AdminEntity> {
    //     return await this.repository.createEntity(inputs);
    // }
}