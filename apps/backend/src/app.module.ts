import { Module } from "@nestjs/common";
import { TransactionsModule } from "./transactions/transactions.module.js";

@Module({
  imports: [TransactionsModule]
})
export class AppModule { }