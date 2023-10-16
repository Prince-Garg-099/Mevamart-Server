import { Injectable, UseInterceptors } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FileInterceptor } from '@nestjs/platform-express';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/dtos/create-product-dto';
import { Product } from 'src/schemas/products.schema';
const multer = require('multer');


@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}


    public async getsearchproducts(val:any){

      const  searchproducts = await  this.productModel.find({

        "$or":[
          {
            "name" : {$regex:val.val}
          },
          {
            "desc": { $regex:val.val}
          }
        ]
       });
      console.log(searchproducts);
      return searchproducts;
    }

   

    public async create(newuser: CreateProductDto,imageUrl:string) {
      const user = await new this.productModel();
        user.mrp = newuser.mrp;
        user.name = newuser.name;
        user.desc = newuser.desc;
        user.category = newuser.category;
        user.sellprice = newuser.sellprice;
        user.discount = newuser.discount;
        user.sstatus = newuser.sstatus;
        user.imageUrl = imageUrl;
      return user.save();
    }

    async getallproducts(){
      const allproducts = await this.productModel.find();
      
      return allproducts;
    }

   
     


}
