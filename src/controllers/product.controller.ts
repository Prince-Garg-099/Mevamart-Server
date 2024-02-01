import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateProductDto } from 'src/dtos/create-product-dto';
import { ProductService } from 'src/services/product.service';
import { Express, query } from 'express';
import { Multer, diskStorage } from 'multer';


@Controller()
export class ProductController {

    constructor(private productservice: ProductService) { }



    // @Post('searchprod')
    // getsearchedprod(@Body() val:any ){
    //   console.log(val);
     
    //   return this.productservice.getsearchproducts(val);
    // }

    @Post('product')
    @UseInterceptors(FileInterceptor('file',{
      storage:diskStorage({
        destination :"./uploads",
        filename:(req,file,cb)=>{
          cb(null,`${file.originalname}`)
        }
      })
    }))


   
    

   create(@UploadedFile() file:Express.Multer.File, @Body() data:CreateProductDto) {
      const imageUrl = `/backend/src/uploads/${file.originalname}`;
      console.log(data);
      console.log(imageUrl);
      return   this.productservice.create(data,imageUrl)
    }

  
   

    @Get('product')
    getallproducts(){
      return this.productservice.getallproducts();
    }
    


  
  


    
}
