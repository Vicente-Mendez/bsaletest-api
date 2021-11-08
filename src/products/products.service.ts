import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from 'typeorm';
import { ProductsDTO } from './products.dto';
import { ProductsEntity } from './products.entity';

@Injectable()
export class ProductsService {
    constructor(
        //(es) Se hace el repository con los valores de ProductsEntity
        //(en) Here the repository is created with the values of ProductsEntity
        @InjectRepository(ProductsEntity)
        private ProductRepository: Repository<ProductsEntity>,
    ){}

    // (en) Esta funcion trae todos los productos que tengan coinciencia con la busqueda usando Like de TypeOrm
    // el metodo recibe un string y se compara con la columna name en el repository 

    // (es) This function bring in every product that has a coincidence with the search using Like from TypeOrm
    // the method gets a string and gets compared with the name column from the repository 
    async findByName(name: string): Promise<ProductsDTO[]> {
        return await this.ProductRepository.find({
            where: {
                name: Like(`%${name}%`),
            }
        })
    }

    // (es)Esta funcion trae todos los productos dependiendo del id de category, recibe un string de category
    // y se comprara con la columna category del repository
    
    // (en) This function brings in every product according to the category id, this method gets a category string
    // and gets compared with the category column in the repository
    async findByCategory(category: string) {
        return await this.ProductRepository.find({
            where: {
                category: category,
            }
        });
    }

    // (es) Trae todos los productos sin condición
    // (en) Brings in every product without any requirement
    async showAllProducts() {
        return await this.ProductRepository.find();
      }

}
