import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import options from "src/config/database/ormconfig";

@Module({
    imports: [TypeOrmModule.forRoot(options)],
})
export class MongoProviderModule {}