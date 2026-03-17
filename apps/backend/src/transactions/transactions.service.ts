import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class TransactionsService {
    constructor(private prisma: PrismaService) { }

    async findAll(userId: string) {
        return this.prisma.transaction.findMany({
            where: { userId },
            orderBy: { date: 'desc' },
        });
    }

    async create(data: {
        userId: string;
        type: string;
        amount: number;
        category: string;
        description?: string;
        date: Date;
    }) {
        return this.prisma.transaction.create({ data })
    }

    async delete(id: string, userId: string) {
        return this.prisma.transaction.delete({
            where: { id, userId },
        });
    }
}