import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user.module';
import { OrderModule } from './modules/order.module';
import { ProductModule } from './modules/product.module';
import { AdminModule } from './modules/admin.module';
require('dotenv').config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI), UserModule,ProductModule,OrderModule,AdminModule],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}
