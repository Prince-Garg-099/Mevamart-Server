import { AdminService } from '../services/admin.service';
import { AdminController } from './../controllers/admin.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema } from 'src/schemas/admin.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Admin", schema: AdminSchema }])],
    controllers: [AdminController],
    providers: [AdminService],
    exports: [AdminService]
})
export class AdminModule { }
