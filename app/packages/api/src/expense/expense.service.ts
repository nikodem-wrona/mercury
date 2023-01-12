import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateExpenseDTO, UpdateExpenseDTO } from './expense.dto';
import { ExpenseDocument, MongoExpense } from './expense.schema';
import { Expense, ExpenseId } from './expense.model';
import { expenseMapper } from './expense.mapper';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectModel(MongoExpense.name)
    private expenseModel: Model<ExpenseDocument>,
  ) {}

  async createExpense(createExpenseDTO: CreateExpenseDTO): Promise<Expense> {
    const { title, description, currency, amount, is_recurring, paid_at } =
      createExpenseDTO;

    const result = await this.expenseModel.create({
      title,
      description,
      currency,
      amount,
      paid_at: new Date(paid_at).toUTCString(),
      is_recurring,
      created_at: new Date().toUTCString(),
      updated_at: new Date().toUTCString(),
    });

    if (!result) {
      throw new Error('Expense could not be created');
    }

    return expenseMapper.fromDB(result);
  }

  async getAllExpenses(): Promise<Expense[]> {
    const result = await this.expenseModel.find();

    if (result.length === 0) {
      return [];
    }

    return result.map(expenseMapper.fromDB);
  }

  async getExpenseById(expenseId: ExpenseId): Promise<Expense> {
    const result = await this.expenseModel.findById(expenseId);

    if (!result) {
      throw new Error('Expense could not be found');
    }

    return expenseMapper.fromDB(result);
  }

  async updateExpense(
    expenseId: ExpenseId,
    updateExpenseDTO: UpdateExpenseDTO,
  ): Promise<Expense> {
    const { title, description, currency, amount, is_recurring, paid_at } =
      updateExpenseDTO;

    const result = await this.expenseModel.findByIdAndUpdate(expenseId, {
      $set: {
        title,
        description,
        currency,
        amount,
        is_recurring,
        paid_at,
      },
    });

    if (!result) {
      throw new Error('Expense could not be updated');
    }

    return expenseMapper.fromDB(result);
  }

  async deleteExpense(expenseId: ExpenseId): Promise<void> {
    await this.expenseModel.findByIdAndDelete(expenseId);
  }
}
