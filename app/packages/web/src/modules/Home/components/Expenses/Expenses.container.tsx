import { FC } from "react";

import { ExpensesComponent } from "./Expenses.components";
import { useGetUserExpenses } from "./hooks";

export const ExpensesContainer: FC = () => {
  const expenses = useGetUserExpenses("123")

  if (!expenses) {
    return null
  }

  return (
    <ExpensesComponent expenses={expenses} />
  )
}
