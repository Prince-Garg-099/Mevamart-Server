import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ProductService } from 'src/services/product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Post('create')
    async createProduct( @Body() createProductDto: any): Promise<any> {
        console.log(createProductDto);
        try {
            // // If a file is uploaded, process it
            // if (file) {
            //     // Process the uploaded file, and you can save its details in the database or perform other operations
            //     console.log(file);
            //     // Modify createProductDto to include the file information if needed
            //     createProductDto.imageUrl = `/uploads/${file.originalname}`;
            // }

            const newProduct = await this.productService.createProduct(createProductDto);
            return { success: true, message: 'Product created successfully', product: newProduct };
        } catch (error) {
            return { error: 'Failed to create product. Please try again.' };
        }
    }

    @Get()
    async getAllProducts() {
        try {
            const products = await this.productService.getAllProducts();
  
            if (!products) {
                return { error: 'Users not found' };
            }
  
            return { success: true, products };
        } catch (error) {
            return { error: 'Failed to fetch products. Please try again.' };
        }
    }


    @Put(':id')
    async updateProduct(@Param('id') productId: string, @Body() updateProductData: any): Promise<any> {
      try {
        const updatedProduct = await this.productService.updateProduct(productId, updateProductData);
        if (!updatedProduct) {
          return { error: 'Product not found or failed to update' };
        }
        return { success: true, message: 'Product updated successfully', product: updatedProduct };
      } catch (error) {
        return { error: 'Failed to update product. Please try again.' };
      }
    }

    @Delete(':id')
  async deleteProduct(@Param('id') productId: string): Promise<any> {
    try {
      const deletedProduct = await this.productService.deleteProduct(productId);
      if (!deletedProduct) {
        return { error: 'Product not found or failed to delete' };
      }
      return { success: true, message: 'Product deleted successfully', product: deletedProduct };
    } catch (error) {
      return { error: 'Failed to delete product. Please try again.' };
    }
  }


    
}
