import { Controller, Get, Param, Delete, Body, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.dto';
import { ParseUUIDPipe } from '@nestjs/common';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { NotFoundException } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get('/')
    getAll(): any {
      return this.productsService.getAll();
    }

    @Get('/extended')
    getextendedAll(): any {
      return this.productsService.getextendedAll();
    }

    @Get('/extended/:id')
        async getextendedById(@Param('id', new ParseUUIDPipe()) id: string) {
        const prod = await this.productsService.getextendedById(id);
        if (!prod) throw new NotFoundException('Product not found');
        return prod;
    }

    @Get('/:id')
        async getById(@Param('id', new ParseUUIDPipe()) id: string) {
        const prod = await this.productsService.getById(id);
        if (!prod) throw new NotFoundException('Product not found');
        return prod;
    }

    @Delete('/:id')
        async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
        if (!(await this.productsService.getById(id)))
            throw new NotFoundException('Product not found');
        await this.productsService.deleteById(id);
        return { success: true };
    }   

    @Post('/')
    create(@Body() productData: CreateProductDTO) {
        return this.productsService.create(productData);
    }   

    @Put('/:id')
    async update(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() productData: UpdateProductDTO,
    ) {
        if (!(await this.productsService.getById(id)))
            throw new NotFoundException('Product not found');
        
        await this.productsService.updateById(id, productData);
        return { success: true };
    }

}
