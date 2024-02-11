import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from 'src/schemas/order.schema';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) { }


  async createOrder(createOrderData: any): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderData);
    return createdOrder.save();
  }

  async getOrderById(orderId: string): Promise<Order> {
    return this.orderModel.findById(orderId).exec();
  }

  async updateOrder(orderId: string, updateOrderData: any): Promise<Order> {
    return this.orderModel.findByIdAndUpdate(orderId, updateOrderData, { new: true }).exec();
  }

  // async deleteOrder(orderId: string): Promise<Order> {
  //   return this.orderModel.findByIdAndDelete(orderId).exec();
  // }

  async getAllOrders(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }




}
