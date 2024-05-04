import { Transaction } from "../../models/transactions/Transaction"
import { TransactionActionType } from "../actions/transactionsActions"

export interface TransactionsState {
  transactions: Transaction[]
}

export const initalTransactionState: TransactionsState = {
  transactions: [],
}

const transactionsReducer = (
  state: TransactionsState = initalTransactionState,
  action: { type: TransactionActionType; payload?: any },
): TransactionsState => {
  switch (action.type) {
    case TransactionActionType.AddTransaction:
      // const newTransaction = { ...action.payload, id: uuidv4() }
      const newTransaction = { ...action.payload }
      return {
        ...state,
        transactions: [...state.transactions, newTransaction],
      }
    case TransactionActionType.EditTransaction:
      return {
        ...state,
        transactions: state.transactions.map((transaction) =>
          transaction.id === action.payload.id
            ? { ...transaction, ...action.payload }
            : transaction,
        ),
      }
    case TransactionActionType.DeleteTransaction:
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => transaction.id !== action.payload),
      }
    default:
      return state
  }
}

export default transactionsReducer
