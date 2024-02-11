import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
import { IsString, IsInt, IsBoolean, IsMongoId, IsNumber } from 'class-validator';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {

    @Prop({ required: true })
    @IsString({ message: 'Product name must be a string' })
    productName: string;

    @Prop({ required: true })
    @IsString({ message: 'Description must be a string' })
    description: string;

    @Prop({ required: true })
    @IsString({ message: 'Category must be a string' })
    category: string;

    @Prop({ required: true })
    @IsNumber({}, { message: 'MRP must be a number' })
    mrp: number;
  
    @Prop({ required: true })
    @IsNumber({}, { message: 'List price must be a number' })
    listingPrice: number;
  
    @Prop({ required: true })
    @IsNumber({}, { message: 'Discount must be a number' })
    discount: number;

    @Prop({ required: true, enum: ['In Stock', 'Out of Stock', 'Temporarily Unavailable'], default: 'In Stock' })
    availabilityStatus: string;

    @Prop({ required: true })
    @IsNumber({}, { message: 'Current stock must be a number' })
    currentStock: number;

    @Prop({  })
    imageAsBase64: string; // Save the image as a Base64 string

}



export const ProductSchema = SchemaFactory.createForClass(Product);