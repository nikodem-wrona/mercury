import { Model } from 'mongoose';
import { Injectable, flatten } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTransactionDTO, UpdateTransactionDTO } from './transaction.dto';
import { TransactionDocument, MongoTransaction } from './transaction.schema';
import { Transaction, TransactionId } from './transaction.model';
import { transactionMapper } from './transaction.mapper';
import { ServerEvents, EventsGateway } from 'src/events';
import { UserService } from 'src/user';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(MongoTransaction.name)
    private transactionModel: Model<TransactionDocument>,
    private eventsGateway: EventsGateway,
    private userService: UserService,
  ) {}

  async createTransaction(
    createTransactionDTO: CreateTransactionDTO,
    userId: string,
  ): Promise<Transaction> {
    const {
      title,
      description,
      currency,
      amount,
      paid_at,
      is_recurring,
      type,
    } = createTransactionDTO;

    const result = await this.transactionModel.create({
      title,
      description,
      currency,
      amount,
      paid_at: new Date(paid_at).toUTCString(),
      created_at: new Date().toUTCString(),
      updated_at: new Date().toUTCString(),
      created_by: userId,
      users_with_access: [userId],
      is_recurring,
      type,
    });

    if (!result) {
      throw new Error('Transaction could not be created');
    }

    const transaction = transactionMapper.fromDB(result);
    const users = await this.userService.GetAllUsers();

    const socketIds = flatten(
      users.map((u) =>
        u.socketConnections.map((connection) => connection.get('socketId')),
      ),
    );

    await this.eventsGateway.SendEvent(
      ServerEvents.TRANSACTION_CREATED,
      transaction,
      socketIds,
    );

    return transaction;
  }

  async getAllTransactions(userId: string): Promise<Transaction[]> {
    const result = await this.transactionModel.find({
      users_with_access: { $elemMatch: { $eq: userId } },
    });

    if (result.length === 0) {
      return [];
    }

    return result.map(transactionMapper.fromDB);
  }

  async getTransactionById(
    transactionId: TransactionId,
    userId: string,
  ): Promise<Transaction> {
    const result = await this.transactionModel.findById(transactionId);

    if (result.users_with_access.indexOf(userId) === -1) {
      throw new Error('User does not have access to this transaction');
    }

    if (!result) {
      throw new Error('Transaction could not be found');
    }

    return transactionMapper.fromDB(result);
  }

  async updateTransaction(
    transactionId: TransactionId,
    updateTransactionDTO: UpdateTransactionDTO,
    userId: string,
  ): Promise<Transaction> {
    const {
      title,
      description,
      currency,
      amount,
      paid_at,
      is_recurring,
      type,
      users_with_access,
    } = updateTransactionDTO;

    await this.getTransactionById(transactionId, userId);

    const result = await this.transactionModel.findByIdAndUpdate(
      transactionId,
      {
        $set: {
          title,
          description,
          currency,
          amount,
          paid_at,
          is_recurring,
          type,
          users_with_access,
        },
      },
    );

    if (!result) {
      throw new Error('Transaction could not be updated');
    }

    return transactionMapper.fromDB(result);
  }

  async deleteTransaction(
    transactionId: TransactionId,
    userId: string,
  ): Promise<void> {
    await this.getTransactionById(transactionId, userId);
    await this.transactionModel.findByIdAndDelete(transactionId);
  }
}
