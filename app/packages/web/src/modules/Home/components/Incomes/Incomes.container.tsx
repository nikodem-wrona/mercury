import { FC } from "react";

import { IncomesComponent } from "./Incomes.components";
import { useGetUserIncomes } from "./hooks";

export const IncomesContainer: FC = () => {
  const incomes = useGetUserIncomes("123")

  return (
    <IncomesComponent incomes={incomes} />
  )
}
