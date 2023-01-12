import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type IncomeDocument = HydratedDocument<MongoIncome>;

@Schema({ collection: 'income' })
export class MongoIncome {
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
}

export const IncomeSchema = SchemaFactory.createForClass(MongoIncome);
