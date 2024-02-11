import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
import { IsString, IsMobilePhone, IsPostalCode, IsIn } from 'class-validator';

@Schema()
export class OrderedProduct {
    @Prop()
    productId: string;

    @Prop()
    mrp: number;

    @Prop()
    listingPrice: number;

    @Prop()
    discount: number;

    @Prop()
    quantity: number;
}

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {


    @Prop()
    @IsString()
    name: string;

    @Prop({ match: /^[0-9]{10}$/, message: 'Contact number must be a valid 10-digit number' })
    contactNumber: string;

    @Prop()
    pinCode: number;

    @Prop()
    @IsString()
    locality: string;

    @Prop()
    @IsString()
    address: string;

    @Prop()
    @IsString()
    city: string;

    @Prop()
    @IsString()
    state: string;

    @Prop({ type: OrderedProduct }) // Reference the OrderedProduct schema
    orderedProducts: OrderedProduct[];

    @Prop()
    @IsString()
    orderedTime: Date;

    @Prop({ default: 'Ordered' })
    @IsString()
    @IsIn(['Ordered', 'Shipped', 'OutforDelivery', 'Delivered', 'Cancelled'], { message: 'Invalid order status' })
    orderStatus: string;

    @Prop()
    userId: string


}

export const OrderSchema = SchemaFactory.createForClass(Order);