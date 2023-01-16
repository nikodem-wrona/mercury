import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionService } from './transaction.service';
import { MongoTransaction, TransactionSchema } from './transaction.schema';
import { TransactionController } from './transaction.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MongoTransaction.name, schema: TransactionSchema },
    ]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
