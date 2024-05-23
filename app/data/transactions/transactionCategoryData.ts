import { TransactionCategory } from "../../models/transactions/Transaction"
import { colors } from "../../theme"

export const transactionCategoryData = [
  {
    value: TransactionCategory.Bills,
    label: "Bills",
    color: colors.palette.bills,
  },
  {
    value: TransactionCategory.Clothes,
    label: "Clothes",
    color: colors.palette.clothes,
  },
  {
    value: TransactionCategory.Entertainment,
    label: "Entertainment",
    color: colors.palette.entertainment,
  },
  {
    value: TransactionCategory.Food,
    label: "Food",
    color: colors.palette.food,
  },
  {
    value: TransactionCategory.Health,
    label: "Health",
    color: colors.palette.health,
  },
  {
    value: TransactionCategory.Transportation,
    label: "Transportation",
    color: colors.palette.transportation,
  },
  {
    value: TransactionCategory.Personal,
    label: "Personal",
    color: colors.palette.personal,
  },
  {
    value: TransactionCategory.Others,
    label: "Others",
    color: colors.palette.others,
  },
]
