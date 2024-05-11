import { TransactionType } from "../../models/transactions/Transaction"
import { colors } from "../../theme"

export const transactionTypeData = [
  {
    value: TransactionType.Income,
    label: "Income",
    color: colors.palette.income,
  },
  {
    value: TransactionType.Expense,
    label: "Expense",
    color: colors.palette.expense,
  },
]
