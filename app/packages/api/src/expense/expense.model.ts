export type ExpenseId = string;

export class Expense {
  id: ExpenseId;
  title: string;
  currency: string;
  amount: number;
  description: string;
  created_at: string;
  updated_at: string;
  is_recurring: boolean;
  paid_at: string;
}
