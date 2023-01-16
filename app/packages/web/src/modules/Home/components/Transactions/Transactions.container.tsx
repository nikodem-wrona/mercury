import { FC } from "react";

import { TransactionsComponent } from "./Transactions.components";
import { useGetUserTransactions } from "./hooks";

export const TransactionsContainer: FC = () => {
  const transactions = useGetUserTransactions("123")

  return (
    <TransactionsComponent transactions={transactions} />
  )
}
