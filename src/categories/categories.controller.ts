import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
//(es) Acá se utilizan las funciones creadas en el categories.service y además se crean los endpoints para
// utilizar dichas funciones

//(en) Here I utilize the functions created in categories.service and make the endpoints to use said functions
export class CategoriesController {
    constructor(private categoriesService: CategoriesService){}
  
    @Get()
    //(es) Acá se hace la funcion de traer todas las categorias con el endpoint categories/
    
    // (en) Here is the function to bring all the categories in the database with the endpoint categories/
      async allCategories() {
        const categories =  await this.categoriesService.allCategories();
        return {
          statusCode: HttpStatus.OK,
          message: 'Categories fetched successfully',
          categories
        };
      }

}