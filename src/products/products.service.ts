import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from 'typeorm';
import { ProductsDTO } from './products.dto';
import { ProductsEntity } from './products.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity)
        private ProductRepository: Repository<ProductsEntity>,
    ){}

    async findByName(name: string): Promise<ProductsDTO> {
        return await this.ProductRepository.findOne({
            where: {
                name: Like(`%${name}%`),
            }
        })
    }

    async findByCategory(category: string) {
        return await this.ProductRepository.find({
            where: {
                category: category,
            }
        });
    }

    async showAllProducts() {
        return await this.ProductRepository.find();
      }

}
