import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToClass } from "class-transformer";
import { Repository } from "typeorm";
import { AdminRepository } from "./admin.repository";
import { AdminDTO } from "./dto/AdminDTO";
import { Admin } from "./serializers/admin.serializer";

@Injectable()
export class AdminService {
    constructor(@InjectRepository(AdminRepository) private readonly repository: AdminRepository) {}

    async get(id: string, relations: string[] = []): Promise<Admin | null> {
        return await this.repository.get(id, relations)
    }

    async getAll(): Promise<Admin[]> {
        const entities = await this.repository.find()
        return this.repository.transformMany(entities)
    }

    async create(inputs: AdminDTO): Promise<Admin> {
        return await this.repository.createEntity(inputs);
    }
    
    // async update(inputs: AdminDTO): Promise<Admin> {
    //     const admin = plainToClass(Admin, inputs)
    //     return await this.repository.updateEntity(admin);
    // }
}