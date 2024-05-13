import { Transaction } from "../../models/transactions/Transaction"

export enum TransactionActionTypes {
  ADD_TRANSACTION = "ADD_TRANSACTION",
  EDIT_TRANSACTION = "EDIT_TRANSACTION",
  DELETE_TRANSACTION = "DELETE_TRANSACTION",
  DELETE_ALL_TRANSACTIONS = "DELETE_ALL_TRANSACTIONS",
  SET_TRANSACTIONS = "SET_TRANSACTIONS",
  SET_TRANSACTION_ERROR = "SET_TRANSACTION_ERROR",
  SET_TRANSACTION_LOADING = "SET_TRANSACTION_LOADING",
}

export interface TransactionsState {
  transactions: Transaction[]
  totalIncome: number
  totalExpense: number
  totalBalance: number
}

export interface AddTransactionAction {
  type: TransactionActionTypes.ADD_TRANSACTION
  payload: Transaction
}

export interface EditTransactionAction {
  type: TransactionActionTypes.EDIT_TRANSACTION
  payload: Transaction
}

export interface DeleteTransactionAction {
  type: TransactionActionTypes.DELETE_TRANSACTION
  payload: string
}

export interface DeleteAllTransactionsAction {
  type: TransactionActionTypes.DELETE_ALL_TRANSACTIONS
}

export interface SetTransactionsAction {
  type: TransactionActionTypes.SET_TRANSACTIONS
  payload: Transaction[]
}

export interface SetTransactionErrorAction {
  type: TransactionActionTypes.SET_TRANSACTION_ERROR
  payload: Error | null
}

export interface SetTransactionLoadingAction {
  type: TransactionActionTypes.SET_TRANSACTION_LOADING
  payload: boolean
}

export type TransactionAction =
  | AddTransactionAction
  | EditTransactionAction
  | DeleteTransactionAction
  | DeleteAllTransactionsAction
  | SetTransactionsAction
  | SetTransactionErrorAction
  | SetTransactionLoadingAction
