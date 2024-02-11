import { Injectable, UseInterceptors } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FileInterceptor } from '@nestjs/platform-express';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/dtos/create-product-dto';
import { Product } from 'src/schemas/product.schema';
const multer = require('multer');


@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}



    async createProduct(createProductDto: any): Promise<Product> {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
      }
    
      async getProductById(productId: string): Promise<Product> {
        return this.productModel.findById(productId).exec();
      }
    
      async updateProduct(productId: string, updateProductData: any): Promise<Product> {
        return this.productModel.findByIdAndUpdate(productId, updateProductData, { new: true }).exec();
      }
    
      // async deleteProduct(productId: string): Promise<Product> {
      //   return this.productModel.findByIdAndDelete(productId).exec();
      // }

      async getAllProducts(): Promise<Product[]> {
        return this.productModel.find().exec();
      }
      

}
