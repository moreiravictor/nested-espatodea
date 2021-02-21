import { TypeOrmModuleOptions } from "@nestjs/typeorm"

const opt: TypeOrmModuleOptions = {
    name: "default",
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'espatodea',
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoLoadEntities: true,
    entities: ["**/**.entity.js"]
  }
module.exports = opt