import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { TransactionsController } from './transactions.controller.js';
import { TransactionsService } from './transactions.service.js';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, PrismaService]
})
export class TransactionsModule { }
