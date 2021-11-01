import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('product')
export class ProductsEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url_image: string;

  @Column()
  price: string;

  @Column()
  discount: string;

  @Column()
  category: string;
  
}