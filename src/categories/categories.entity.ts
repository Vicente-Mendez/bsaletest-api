import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('category')
export class CategoriesEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
  
}