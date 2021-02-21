import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { Admin } from "./entities/admin.entity";

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
        // return this.adminService.get(id)
    }

    // @Post()
    // async create(@Body() admin: AdminDTO): Promise<AdminEntity> {
    //     return await this.adminService.create(admin)
    // }

    // @Put('/:id')
    // async update(@Body() admin: AdminDTO, @Param('id') id: string): Promise<AdminEntity> {
    //     admin.id = id
    //     return this.adminService.update(admin)
    // }
}