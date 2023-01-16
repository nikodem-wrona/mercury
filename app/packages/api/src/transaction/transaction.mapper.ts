import { Types, Document } from 'mongoose';

import { MongoTransaction } from './transaction.schema';

type DBTransaction = Document<unknown, any, MongoTransaction> &
  MongoTransaction & {
    _id: Types.ObjectId;
  } & Required<{
    _id: Types.ObjectId;
  }>;

export const transactionMapper = {
  fromDB: (dbTransaction: DBTransaction) => {
    return {
      id: dbTransaction.id,
      title: dbTransaction.title,
      description: dbTransaction.description,
      amount: dbTransaction.amount,
      currency: dbTransaction.currency,
      paid_at: dbTransaction.paid_at,
      created_at: dbTransaction.created_at,
      updated_at: dbTransaction.updated_at,
      created_by: dbTransaction.created_by,
      users_with_access: dbTransaction.users_with_access,
      type: dbTransaction.type,
      is_recurring: dbTransaction.is_recurring,
    };
  },
};
