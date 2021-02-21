import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './models/admin/admin.controller';
import { AdminModule } from './models/admin/admin.module';
const options = require('./ormconfig')

@Module({
  imports: [
    AdminModule,
    TypeOrmModule.forRoot(options)
  ],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule {}
