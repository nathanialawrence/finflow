import {
  fetchTransactions,
  fetchTransactionsFailure,
  fetchTransactionsSuccess,
} from "../actions/transactionsActions"

import { initalTransactionState } from "../reducers/transactionsReducer"

export const fetchTransactionsThunk = () => {
  return async (dispatch: any) => {
    dispatch(fetchTransactions())
    try {
      const transactions = [...initalTransactionState.transactions] // get the transactions from the initial state
      dispatch(fetchTransactionsSuccess(transactions))
    } catch (error) {
      dispatch(fetchTransactionsFailure(error))
    }
  }
}
