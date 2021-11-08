import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesDTO } from './categories.dto';
import { CategoriesEntity } from './categories.entity';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(CategoriesEntity)
        //(es)Se hace el repository con los valores de CategoriesEntity
        //(en) Here the repository is created with the values of CategoriesEntity
        private categoryRepository: Repository<CategoriesEntity>,
    ){}

    // (es) Trae todas las categorias sin condición
    // (en) Brings in every category without any requirement
    async allCategories() {
        return await this.categoryRepository.find();
      }

}
