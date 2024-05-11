import { Transaction } from "../../models/transactions/Transaction"

export enum TransactionActionType {
  AddTransaction = "ADD_TRANSACTION",
  EditTransaction = "EDIT_TRANSACTION",
  DeleteTransaction = "DELETE_TRANSACTION",
  DeleteAllTransactions = "DELETE_ALL_TRANSACTIONS",
}

export const addTransaction = (transaction: Transaction) => ({
  type: TransactionActionType.AddTransaction,
  payload: transaction,
})

export const editTransaction = (transaction: Transaction) => ({
  type: TransactionActionType.EditTransaction,
  payload: transaction,
})

export const deleteTransaction = (id: string) => ({
  type: TransactionActionType.DeleteTransaction,
  payload: id,
})

export const deleteAllTransactions = () => ({
  type: TransactionActionType.DeleteAllTransactions,
})
