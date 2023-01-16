import { Transaction, TransactionId } from "@/types"
import { AccessTokenProvider, createHttpClient, HttpClient } from "./httpClient"
import { config } from "@/config"

export type AddTransactionDTO = Omit<
  Transaction,
  "id" | "created_at" | "updated_at" | "user_id" | "created_by"
>

export type EditTransactionDTO = Omit<
  Transaction,
  "id" | "created_at" | "updated_at" | "user_id" | "created_by"
>

export class ApiClient {
  private readonly httpClient: HttpClient

  constructor(accessTokenProvider: AccessTokenProvider) {
    this.httpClient = createHttpClient({
      baseURL: config.apiUrl,
      accessTokenProvider,
    })
  }

  getTransactions(): Promise<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`/transactions`).then((r) => r.data)
  }

  getTransaction(transactionId: TransactionId): Promise<Transaction> {
    return this.httpClient.get<Transaction>(`/transaction/${transactionId}`).then((r) => r.data)
  }

  addTransaction(payload: AddTransactionDTO): Promise<Transaction> {
    return this.httpClient.post<Transaction>(`/transaction`, payload).then((r) => r.data)
  }

  editTransaction(transactionId: TransactionId, payload: EditTransactionDTO): Promise<Transaction> {
    return this.httpClient.put<Transaction>(`/transaction/${transactionId}`, payload).then((r) => r.data)
  }

  deleteTransaction(transactionId: TransactionId): Promise<void> {
    return this.httpClient.delete<void>(`/transaction/${transactionId}`).then((r) => r.data)
  }
}
