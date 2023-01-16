import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';
import { Transaction } from './transaction.model';

export class CreateTransactionDTO
  implements
    Omit<Transaction, 'id' | 'created_at' | 'updated_at' | 'created_by'>
{
  @IsString()
  title: string;
  @IsString()
  currency: string;
  @IsNumber()
  amount: number;
  @IsString()
  description: string;
  @IsString()
  paid_at: string;
  @IsBoolean()
  is_recurring: boolean;
  @IsArray()
  @IsString({ each: true })
  users_with_access: string[];
  @IsString()
  type: 'expense' | 'income' | 'stock';
}

export class UpdateTransactionDTO
  implements
    Omit<Transaction, 'id' | 'created_at' | 'updated_at' | 'created_by'>
{
  @IsString()
  title: string;
  @IsString()
  currency: string;
  @IsNumber()
  amount: number;
  @IsString()
  description: string;
  @IsString()
  paid_at: string;
  @IsBoolean()
  is_recurring: boolean;
  @IsArray()
  @IsString({ each: true })
  users_with_access: string[];
  @IsString()
  type: 'expense' | 'income' | 'stock';
}
