export type IncomeId = string;

export class Income {
  id: IncomeId;
  title: string;
  currency: string;
  amount: number;
  description: string;
  created_at: string;
  updated_at: string;
  paid_at: string;
}
