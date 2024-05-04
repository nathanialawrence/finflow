import { Transaction } from "../../models/transactions/Transaction"

export enum TransactionActionType {
  AddTransaction = "ADD_TRANSACTION",
  EditTransaction = "EDIT_TRANSACTION",
  DeleteTransaction = "DELETE_TRANSACTION",
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
