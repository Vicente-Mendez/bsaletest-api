import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    constructor(
      private connection: Connection,
    ){}
}
