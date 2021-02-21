import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './models/admin/admin.controller';
import { AdminModule } from './models/admin/admin.module';
import { MongoProviderModule } from './providers/database/mongo/provider.module';

@Module({
  imports: [
    AdminModule,
    MongoProviderModule
  ],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule {}
