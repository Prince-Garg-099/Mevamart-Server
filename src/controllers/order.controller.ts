import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { OrderService } from 'src/services/order.service';

@Controller('order')
export class OrderController {

constructor(private orderService:OrderService){}

@Post()
async createOrder(@Body() createOrderData: any): Promise<any> {
  try {
    const newOrder = await this.orderService.createOrder(createOrderData);
    return { success: true, message: 'Order created successfully', order: newOrder };
  } catch (error) {
    return { error: 'Failed to create order. Please try again.' };
  }
}


@Get()
async getAllOrders() {
    try {
        const orders = await this.orderService.getAllOrders();

        if (!orders) {
            return { error: 'Orders not found' };
        }

        return { success: true, orders };
    } catch (error) {
        return { error: 'Failed to fetch orders. Please try again.' };
    }
}

@Put(':id')
  async updateOrder(@Param('id') orderId: string, @Body() UpdateOrderData: any): Promise<any> {
    try {
      const updatedOrder = await this.orderService.updateOrder(orderId, UpdateOrderData);
      if (!updatedOrder) {
        return { error: 'Order not found or failed to update' };
      }
      return { success: true, message: 'Order updated successfully', order: updatedOrder };
    } catch (error) {
      return { error: 'Failed to update order. Please try again.' };
    }
  }

  @Delete(':id')
  async deleteOrder(@Param('id') orderId: string): Promise<any> {
    try {
      const deletedOrder = await this.orderService.deleteOrder(orderId);
      if (!deletedOrder) {
        return { error: 'Order not found or failed to delete' };
      }
      return { success: true, message: 'Order deleted successfully', order: deletedOrder };
    } catch (error) {
      return { error: 'Failed to delete order. Please try again.' };
    }
  }
  

}
