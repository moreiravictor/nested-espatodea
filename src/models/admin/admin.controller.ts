import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminDTO } from "./dto/AdminDTO";
import { Admin } from "./serializers/admin.serializer";

@Controller('admin')
export class AdminController {

    constructor(private readonly adminService: AdminService) {}

    @Get('/:id')
    async get(@Param('id')id: string): Promise<Admin> {
        return this.adminService.get(id)
        // return this.adminService.get(id)
    }

    @Get()
    async findAll(): Promise<Admin[]> {
        return this.adminService.getAll()
    }

    @Post()
    async create(@Body() admin: AdminDTO): Promise<Admin> {
        return await this.adminService.create(admin)
    }

    @Put('/:id')
    async update(@Body() admin: AdminDTO, @Param('id') id: string): Promise<Admin> {
        return this.adminService.update(id, admin)
    }
}