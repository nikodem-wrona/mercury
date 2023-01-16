export type TransactionId = string;

export class Transaction {
  id: TransactionId;
  title: string;
  currency: string;
  amount: number;
  description: string;
  created_at: string;
  updated_at: string;
  paid_at: string;
  created_by: string;
  users_with_access: string[];
  type: 'expense' | 'income' | 'stock';
  is_recurring: boolean;
}
