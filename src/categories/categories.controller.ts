import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService){}
    @Get('/:id')
    async findById(@Param('id') id: number){
        const category = await this.categoriesService.findById(id);

        if(category){
            return {
                statusCode: HttpStatus.OK,
                message: 'Category fetched successfully',
                category
            };
        }
        return {
            statusCode: HttpStatus.NOT_FOUND,
            message: 'Category not fetched',
        }
        
    }

    @Get()
      async allCategories() {
        const categories =  await this.categoriesService.allCategories();
        return {
          statusCode: HttpStatus.OK,
          message: 'Categories fetched successfully',
          categories
        };
      }

}