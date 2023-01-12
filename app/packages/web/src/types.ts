export type UserId = string;

export type IncomeId = string;

export type Income = {
  id: IncomeId;
  title: string;
  description: string;
  currency: string;
  amount: number;
  paid_at: string;
  created_at: string;
  updated_at: string;
  user_id: UserId;
}


export type ExpenseId = string;

export type Expense = {
  id: ExpenseId;
  title: string;
  currency: string;
  amount: number;
  description: string;
  created_at: string;
  updated_at: string;
  is_recurring: boolean;
  paid_at: string;
  user_id: UserId;
}
