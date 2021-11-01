import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}
    @Get('/:name')
    async findByName(@Param('name') name: string){
        const product = await this.productsService.findByName(name);

        if(product){
            return {
                statusCode: HttpStatus.OK,
                message: 'Product fetched successfully',
                product
            };
        }
        return {
            statusCode: HttpStatus.NOT_FOUND,
            message: 'Product not fetched',
        }
        
    }

    @Get()
      async showAllProducts() {
        const products =  await this.productsService.showAllProducts();
        return {
          statusCode: HttpStatus.OK,
          message: 'Products fetched successfully',
          products
        };
      }

}
