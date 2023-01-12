import { Types, Document } from 'mongoose';

import { MongoIncome } from './income.schema';

type DBIncome = Document<unknown, any, MongoIncome> &
  MongoIncome & {
    _id: Types.ObjectId;
  } & Required<{
    _id: Types.ObjectId;
  }>;

export const incomeMapper = {
  fromDB: (dbIncome: DBIncome) => {
    return {
      id: dbIncome.id,
      title: dbIncome.title,
      description: dbIncome.description,
      amount: dbIncome.amount,
      currency: dbIncome.currency,
      paid_at: dbIncome.paid_at,
      created_at: dbIncome.created_at,
      updated_at: dbIncome.updated_at,
    };
  },
};
