import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionService } from './transaction.service';
import { MongoTransaction, TransactionSchema } from './transaction.schema';
import { TransactionController } from './transaction.controller';
import { EventsGateway } from '../events';
import { UserModule, UserService } from 'src/user';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MongoTransaction.name, schema: TransactionSchema },
    ]),
    UserModule,
  ],
  controllers: [TransactionController],
  providers: [TransactionService, EventsGateway, UserService],
})
export class TransactionModule {}
