import { Expense, ExpenseId, Income, IncomeId } from "@/types"
import { AccessTokenProvider, createHttpClient, HttpClient } from "./httpClient"
import { config } from "@/config"

export type AddIncomeDTO = Omit<
  Income,
  "id" | "created_at" | "updated_at" | "user_id"
>

export type EditIncomeDTO = Omit<
  Income,
  "id" | "created_at" | "updated_at" | "user_id"
>

export type AddExpenseDTO = Omit<
  Expense,
  "id" | "created_at" | "updated_at" | "user_id"
>

export type EditExpenseDTO = Omit<
  Expense,
  "id" | "created_at" | "updated_at" | "user_id"
>


export class ApiClient {
  private readonly httpClient: HttpClient

  constructor(accessTokenProvider: AccessTokenProvider) {
    this.httpClient = createHttpClient({
      baseURL: config.apiUrl,
      accessTokenProvider,
    })
  }

  getIncomes(): Promise<Income[]> {
    return this.httpClient.get<Income[]>(`/incomes`).then((r) => r.data)
  }

  getExpenses(): Promise<Expense[]> {
    return this.httpClient.get<Expense[]>(`/expenses`).then((r) => r.data)
  }

  getIncome(incomeId: IncomeId): Promise<Income> {
    return this.httpClient.get<Income>(`/income/${incomeId}`).then((r) => r.data)
  }

  addIncome(payload: AddIncomeDTO): Promise<Income> {
    return this.httpClient.post<Income>(`/income`, payload).then((r) => r.data)
  }

  editIncome(incomeId: IncomeId, payload: EditIncomeDTO): Promise<Income> {
    return this.httpClient.put<Income>(`/income/${incomeId}`, payload).then((r) => r.data)
  }

  deleteIncome(incomeId: IncomeId): Promise<void> {
    return this.httpClient.delete<void>(`/income/${incomeId}`).then((r) => r.data)
  }
  
  getExpense(expesneId: ExpenseId): Promise<Expense> {
    return this.httpClient.get<Expense>(`/expense/${expesneId}`).then((r) => r.data)
  }

  addExpense(payload: AddExpenseDTO): Promise<Expense> {
    return this.httpClient.post<Expense>(`/expense`, payload).then((r) => r.data)
  }

  editExpense(expenseId: ExpenseId, payload: EditExpenseDTO): Promise<Expense> {
    return this.httpClient.put<Expense>(`/expense/${expenseId}`, payload).then((r) => r.data)
  }

  deleteExpense(expenseId: ExpenseId): Promise<void> {
    return this.httpClient.delete<void>(`/expense/${expenseId}`).then((r) => r.data)
  }
}
