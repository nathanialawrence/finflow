import { Transaction } from "../../models/transactions/Transaction"
import { TransactionActionTypes } from "../types/transactionActionTypes"

export const addTransaction = (transaction: Transaction) => ({
  type: TransactionActionTypes.ADD_TRANSACTION,
  payload: transaction,
})

export const editTransaction = (transaction: Transaction) => ({
  type: TransactionActionTypes.EDIT_TRANSACTION,
  payload: transaction,
})

export const deleteTransaction = (id: string) => ({
  type: TransactionActionTypes.DELETE_TRANSACTION,
  payload: id,
})

export const deleteAllTransactions = () => ({
  type: TransactionActionTypes.DELETE_ALL_TRANSACTIONS,
})
