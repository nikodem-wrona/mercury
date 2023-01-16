import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTransactionDTO, UpdateTransactionDTO } from './transaction.dto';
import { TransactionDocument, MongoTransaction } from './transaction.schema';
import { Transaction, TransactionId } from './transaction.model';
import { transactionMapper } from './transaction.mapper';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(MongoTransaction.name)
    private transactionModel: Model<TransactionDocument>,
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

    return transactionMapper.fromDB(result);
  }

  async getAllTransactions(): Promise<Transaction[]> {
    const result = await this.transactionModel.find();

    if (result.length === 0) {
      return [];
    }

    return result.map(transactionMapper.fromDB);
  }

  async getTransactionById(transactionId: TransactionId): Promise<Transaction> {
    const result = await this.transactionModel.findById(transactionId);

    if (!result) {
      throw new Error('Transaction could not be found');
    }

    return transactionMapper.fromDB(result);
  }

  async updateTransaction(
    transactionId: TransactionId,
    updateTransactionDTO: UpdateTransactionDTO,
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

  async deleteTransaction(transactionId: TransactionId): Promise<void> {
    await this.transactionModel.findByIdAndDelete(transactionId);
  }
}
