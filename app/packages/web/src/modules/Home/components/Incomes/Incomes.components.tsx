import { FC} from "react"

import { Income, IncomeId } from "@/types"

import { AddIncome, EditIncome } from "./components"

import { Table } from "@/_shared/components"

type IncomesComponentProps = {
  incomes: Income[]
}

export const IncomesComponent: FC<IncomesComponentProps> = ({ incomes }) => {
  const headers = ["Id", "Title", "Description", "Currency", "Amount", "Paid at", "Created at", "Updated at"]

  return (
    <Table<Income>
      headers={headers}
      header="Incomes"
      items={incomes}
      addItemModalPayload={{
        header: "Add income",
        renderContent: () => <AddIncome />,
      }}
      editItemModalPayload={{
        header: "Edit income",
        renderContent: (incomeId, onClose) => (
          <EditIncome incomeId={incomeId as IncomeId} onClose={onClose} />
        ),
      }}
    />
  )
}

