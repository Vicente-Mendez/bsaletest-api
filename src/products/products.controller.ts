import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
//(es) Acá se utilizan las funciones creadas en el products.service y además se crean los endpoints para
// utilizar dichas funciones

//(en) Here I utilize the functions created in products.service and make the endpoints to use said functions
export class ProductsController {
    constructor(private productsService: ProductsService){}
    @Get('/:name')
    // (es) Aca se hace la funcion de buscar por nombre, con el endpoint products/(nombre del producto)
    // se hace un const el cual se retornará en caso de haber coincidencia, en caso opuesto se retorna un NOT_FOUND
    
    // (en) Here is the findByName function with the endpoint products/(product's name)
    // I make a const, which gets returned in case of coincidence, if there's not a coincidence, it returns a NOT_FOUND
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

    // (es) Aca se hace la funcion de buscar por categoria, con el endpoint products/category/(id de categoria)
    // se hace un const el cual se retornará en caso de haber coincidencia, en caso opuesto se retorna un NOT_FOUND
    
    // (en) Here is the findByCategory function with the endpoint products/category(category's id)
    // I make a const, which gets returned in case of coincidence, if there's not a coincidence, it returns a NOT_FOUND
    @Get('/category/:category')
    async findByCategory(@Param('category') category: string){
        const products = await this.productsService.findByCategory(category);

        if(products){
            return {
                statusCode: HttpStatus.OK,
                message: 'Product fetched successfully',
                products
            };
        }
        return {
            statusCode: HttpStatus.NOT_FOUND,
            message: 'Product not fetched',
          
        }
        
    }

    @Get()
    //(es) Acá se hace la funcion de traer todos los productos con el endpoint products/
    
    // (en) Here is the function to bring all the products in the database with the endpoint products/
      async showAllProducts() {
        const products =  await this.productsService.showAllProducts();
        return {
          statusCode: HttpStatus.OK,
          message: 'Products fetched successfully',
          products
        };
      }

}
