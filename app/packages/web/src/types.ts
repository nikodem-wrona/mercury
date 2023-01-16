export type UserId = string;

export type TransactionId = string;

export type Transaction = {
  id: TransactionId;
  title: string;
  description: string;
  currency: string;
  amount: number;
  paid_at: string;
  created_at: string;
  updated_at: string;
  created_by: UserId;
  users_with_access: UserId[];
  is_recurring: boolean;
  type: 'income' | 'expense' | 'stock';
}
