import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
import { IsString, IsInt, IsBoolean, IsMongoId } from 'class-validator';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {

 
  
    
    @Prop()
    name: string;

    @Prop({})
    mrp: number;

    @Prop({})
    sellprice: number;
 
    @Prop()
    sstatus: boolean;

    @Prop()
    desc: string;

    @Prop()
    discount: number;

    @Prop()
    category: string;

    @Prop()
    imageUrl :string;

  

    
    

}

export const ProductSchema = SchemaFactory.createForClass(Product);