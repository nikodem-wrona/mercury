import { Expense } from '@/types';
import { useState } from 'react';
import { useAddExpense } from './useAddExpense';

type UseAddExpenseForm = {
  editField: (fieldName: AddExpenseFormFields, fieldValue: unknown) => void;
  save: () => void;
  expenseToDisplay: ExpenseFormValues;
}

type ExpenseFormValues = Omit<Expense, 'id' | 'created_at' | 'updated_at' | 'user_id'>

export enum AddExpenseFormFields {
  Title = 'title',
  Description = 'description',
  Currency = 'currency',
  Amount = 'amount',
  PaidAt = 'paid_at',
}

export const useAddExpenseForm = (): UseAddExpenseForm => {
  const { addExpense } = useAddExpense();

  const [formValues, setFormValues] = useState<ExpenseFormValues>({
    title: '',
    description: '',
    currency: '',
    amount: 0,
    is_recurring: false,
    paid_at: '',
  });

  const editField = (fieldName: AddExpenseFormFields, fieldValue: unknown): void => {
    setFormValues({
        ...formValues,
        [fieldName]: fieldValue,
    });
  };

  const save = () => {
    addExpense(formValues);
  }

  return {
    editField,
    save,
    expenseToDisplay: formValues,
  }
}
