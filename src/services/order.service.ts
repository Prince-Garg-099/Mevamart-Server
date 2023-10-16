import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from 'src/dtos/create-order-dto';
import { Order } from 'src/schemas/orders.schema';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}


    public async createorder(newuser: CreateOrderDto) {
        const order = await new this.orderModel(newuser);
        return order.save();
      }
      async getallorders(){
        console.log("getallorders");
        const allproducts = await this.orderModel.find();
        
        return allproducts;
      }

      

      async getallordersbyID(userId:any){
        const allorders = await this.orderModel.find({userid:userId});
        console.log(allorders)
        return allorders;
      }

      async getsingleorder(orderid:any){
        const order = await this.orderModel.find({_id:orderid});
        console.log(order)
        return order;
      }

      async setorderstatus(data:any){

        const status = await this.orderModel.updateOne(
          { _id: data.order_id },
          {
              $set: {
                  order_status: data.statusValue
              }
          })
        
      }
      

      async cancelorder(data:any){
        const status = await this.orderModel.updateOne(
          { _id: data.order_id },
          {
              $set: {
                  order_status: "Cancelled"
              }
          })
      }


}
