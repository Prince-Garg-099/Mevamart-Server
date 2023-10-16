import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from 'src/controllers/product.controller';
import { ProductSchema } from 'src/schemas/products.schema';
import { ProductService } from 'src/services/product.service';


@Module({

    imports : [MongooseModule.forFeature([{name: "Product", schema: ProductSchema}])],
    controllers: [ProductController],
      providers: [ProductService],
      exports: [ProductService]
    
    })export class ProductModule {}
