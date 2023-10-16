import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateOrderDto } from 'src/dtos/create-order-dto';
import { OrderService } from 'src/services/order.service';

@Controller('')
export class OrderController {

constructor(private orderservice:OrderService){}
    @Post('myorder')
    createorder(@Body() data:CreateOrderDto) {
           return   this.orderservice.createorder(data)
      }

      @Post('myorders')
      getallordersbyId(@Body()  data :any){
        return   this.orderservice.getallordersbyID(data.userId);
      }

      @Get('orders')
      getallorders(){
        return this.orderservice.getallorders();
      }

      @Get('orderid/:orderid')
     getuserdata(@Param('orderid') orderid: string) {
       console.log(orderid);

     return this.orderservice.getsingleorder(orderid);
     }

     @Put('set_status')
     setorderstatus(@Body()  order_id :any){
      console.log(order_id);
      return this.orderservice.setorderstatus(order_id);
      
     }

     @Put('cancelorder')
     cancelorder(@Body()  data :any){
      console.log(data);
      return this.orderservice.cancelorder(data);
      
     }

    
  

}
