import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from 'src/controllers/order.controller';
import { OrderSchema } from 'src/schemas/order.schema';
import { OrderService } from 'src/services/order.service';

@Module({

    imports : [MongooseModule.forFeature([{name: "Order", schema: OrderSchema}])],
    controllers: [OrderController],
      providers: [OrderService],
      exports: [OrderService]
})
export class OrderModule {}
