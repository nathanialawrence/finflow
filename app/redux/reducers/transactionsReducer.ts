import {
  TransactionAction,
  TransactionActionTypes,
  TransactionsState,
} from "../types/transactionActionTypes"

import { TransactionType } from "../../models/transactions/Transaction"

export const initalTransactionState: TransactionsState = {
  transactions: [],
  totalIncome: 0,
  totalExpense: 0,
  totalBalance: 0,
}

const transactionsReducer = (
  state: TransactionsState = initalTransactionState,
  action: TransactionAction,
): TransactionsState => {
  switch (action.type) {
    case TransactionActionTypes.ADD_TRANSACTION:
      const newTransaction = { ...action.payload }
      const sortedTransactions = [newTransaction, ...state.transactions].sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateB.getTime() - dateA.getTime()
      })
      const totalIncome = sortedTransactions.reduce((acc, transaction) => {
        if (transaction.type === TransactionType.Income) {
          return acc + transaction.amount
        } else {
          return acc
        }
      }, 0)
      const totalExpense = sortedTransactions.reduce((acc, transaction) => {
        if (transaction.type === TransactionType.Expense) {
          return acc + transaction.amount
        } else {
          return acc
        }
      }, 0)
      return {
        ...state,
        transactions: sortedTransactions,
        totalIncome,
        totalExpense,
        totalBalance: totalIncome - totalExpense,
      }
    case TransactionActionTypes.EDIT_TRANSACTION:
      const updatedTransaction = { ...action.payload }
      const updatedTransactions = state.transactions.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? { ...transaction, ...updatedTransaction }
          : transaction,
      )
      const sortedUpdatedTransactions = updatedTransactions.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateB.getTime() - dateA.getTime()
      })
      const totalIncomeAfterEdit = sortedUpdatedTransactions.reduce((acc, transaction) => {
        if (transaction.type === TransactionType.Income) {
          return acc + transaction.amount
        } else {
          return acc
        }
      }, 0)
      const totalExpenseAfterEdit = sortedUpdatedTransactions.reduce((acc, transaction) => {
        if (transaction.type === TransactionType.Expense) {
          return acc + transaction.amount
        } else {
          return acc
        }
      }, 0)
      return {
        ...state,
        transactions: sortedUpdatedTransactions,
        totalIncome: totalIncomeAfterEdit,
        totalExpense: totalExpenseAfterEdit,
        totalBalance: totalIncomeAfterEdit - totalExpenseAfterEdit,
      }
    case TransactionActionTypes.DELETE_TRANSACTION:
      const updatedTransactionsAfterDelete = state.transactions.filter(
        (transaction) => transaction.id !== action.payload,
      )
      const totalIncomeAfterDelete = updatedTransactionsAfterDelete.reduce((acc, transaction) => {
        if (transaction.type === TransactionType.Income) {
          return acc + transaction.amount
        } else {
          return acc
        }
      }, 0)
      const totalExpenseAfterDelete = updatedTransactionsAfterDelete.reduce((acc, transaction) => {
        if (transaction.type === TransactionType.Expense) {
          return acc + transaction.amount
        } else {
          return acc
        }
      }, 0)
      return {
        ...state,
        transactions: updatedTransactionsAfterDelete,
        totalIncome: totalIncomeAfterDelete,
        totalExpense: totalExpenseAfterDelete,
        totalBalance: totalIncomeAfterDelete - totalExpenseAfterDelete,
      }
    case TransactionActionTypes.DELETE_ALL_TRANSACTIONS:
      return { ...state, transactions: [], totalIncome: 0, totalExpense: 0, totalBalance: 0 }
    default:
      return state
  }
}

export default transactionsReducer
