import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user.module';
import { OrderModule } from './modules/order.module';
import { ProductModule } from './modules/product.module';
import { AdminModule } from './modules/admin.module';



@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://deepak:jPHBx9TJ7X6cNayF@cluster0.5p5886h.mongodb.net/User_Details', {

  
  }), UserModule, OrderModule, ProductModule, AdminModule],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}
