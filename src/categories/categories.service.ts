import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesDTO } from './categories.dto';
import { CategoriesEntity } from './categories.entity';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(CategoriesEntity)
        private categoryRepository: Repository<CategoriesEntity>,
    ){}

    async findById(id: number): Promise<CategoriesDTO> {
        return await this.categoryRepository.findOne({
            where: {
                id: id,
            }
        })
    }


    async allCategories() {
        return await this.categoryRepository.find();
      }

}
