import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
import { IsString, IsInt, IsBoolean, IsMongoId } from 'class-validator';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {

 
  
    @IsString()
    @IsMongoId()
    _id: string;
  
    @Prop()
    name: string

    @Prop()
    phoneno:string

    @Prop()
    pincode: string

    @Prop()
    locality:string

    @Prop()
    address: string

    @Prop()
    city: string

    @Prop()
    state:string

    @Prop({type:Object})
    products:{
        _id :string;
        mrp :string;
        name :string;
        desc :string;
        category:string;
        sellprice:string;
        discount:string;
        sstatus:boolean;
        imageUrl:string;
        qnt :string;

    }

    @Prop()
    userid:string

    @Prop()
    usergid:string

    @Prop()
    usergemail: string


    @Prop()
    usergname:string

    @Prop()
    username: string

    @Prop()
    ordertime: string
    
    @Prop({default: "Ordered" })
    order_status: string
    

}

export const OrderSchema = SchemaFactory.createForClass(Order);