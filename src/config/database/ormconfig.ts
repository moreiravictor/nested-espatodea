import { TypeOrmModuleOptions } from "@nestjs/typeorm"

const options: TypeOrmModuleOptions = {
    name: "default",
    type: 'mongodb',
    host: process.env.HOST || 'localhost',
    port: parseInt(process.env.PORT) || 27017,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE || 'espatodea',
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoLoadEntities: true,
    entities: ["**/**.entity.js"],
    migrations: ["src/database/migrations/*{.ts,.js}"],
    cli: {
      migrationsDir: "src/database/migrations"
    }
  }
export default options