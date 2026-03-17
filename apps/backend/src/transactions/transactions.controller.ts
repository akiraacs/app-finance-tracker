import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto.js';
import { TransactionsService } from './transactions.service.js';

@Controller('transactions')
export class TransactionsController {
    constructor(private service: TransactionsService) { }

    @Get()
    findAll(@Query('userId') userId: string) {
        return this.service.findAll(userId)
    }

    @Post()
    create(@Body() body: CreateTransactionDto) {
        return this.service.create({
            ...body,
            date: new Date(body.date),
        })
    }

    @Delete(':id')
    delete(@Param('id') id: string, @Query('userId') userId: string) {
        return this.service.delete(id, userId)
    }
}
