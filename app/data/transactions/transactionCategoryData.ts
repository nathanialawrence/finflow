import { TransactionCategory } from "../../models/transactions/Transaction"
import { colors } from "../../theme"

export const transactionCategoryData = [
  {
    value: TransactionCategory.Bills,
    label: "Bills",
    color: colors.palette.bills, // Blue
  },
  {
    value: TransactionCategory.Clothes,
    label: "Clothes",
    color: colors.palette.clothes, // Purple
  },
  {
    value: TransactionCategory.Entertainment,
    label: "Entertainment",
    color: colors.palette.entertainment, // Red
  },
  {
    value: TransactionCategory.Food,
    label: "Food",
    color: colors.palette.food, // Amber
  },
  {
    value: TransactionCategory.Health,
    label: "Health",
    color: colors.palette.health, // Light Green
  },
  {
    value: TransactionCategory.Transportation,
    label: "Transportation",
    color: colors.palette.transportation, // Green
  },
  {
    value: TransactionCategory.Personal,
    label: "Personal",
    color: colors.palette.personal, // Gray
  },
  {
    value: TransactionCategory.Others,
    label: "Others",
    color: colors.palette.others, // Orange
  },
]
