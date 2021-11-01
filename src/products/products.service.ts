import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
                name: name,
            }
        })
    }

    async showAllProducts() {
        return await this.ProductRepository.find();
      }

}
