import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseService } from './expense.service';
import { MongoExpense, ExpenseSchema } from './expense.schema';
import { ExpenseController } from './expense.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MongoExpense.name, schema: ExpenseSchema },
    ]),
  ],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class ExpenseModule {}
