import { Types, Document } from 'mongoose';
import { Expense } from './expense.model';

import { MongoExpense } from './expense.schema';

type DBExpense = Document<unknown, any, MongoExpense> &
  MongoExpense & {
    _id: Types.ObjectId;
  } & Required<{
    _id: Types.ObjectId;
  }>;

export const expenseMapper = {
  fromDB: (dbExpense: DBExpense): Expense => {
    return {
      id: dbExpense.id,
      title: dbExpense.title,
      description: dbExpense.description,
      amount: dbExpense.amount,
      currency: dbExpense.currency,
      paid_at: dbExpense.paid_at,
      is_recurring: dbExpense.is_recurring,
      created_at: dbExpense.created_at,
      updated_at: dbExpense.updated_at,
    };
  },
};
