import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransactionDocument = HydratedDocument<MongoTransaction>;

@Schema({ collection: 'transaction' })
export class MongoTransaction {
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  title: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  currency: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  amount: number;

  @Prop({ type: mongoose.Schema.Types.String, required: false })
  description: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  created_at: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  updated_at: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  paid_at: string;

  @Prop({ type: [mongoose.Schema.Types.String], required: true })
  users_with_access: string[];

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  created_by: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  type: 'expense' | 'income' | 'stock';

  @Prop({ type: mongoose.Schema.Types.Boolean, required: true })
  is_recurring: boolean;
}

export const TransactionSchema = SchemaFactory.createForClass(MongoTransaction);
