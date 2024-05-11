import { TransactionCategory } from "../../models/transactions/Transaction"

export const transactionCategoryData = [
  {
    value: TransactionCategory.Bills,
    label: "Bills",
    color: "#2196F3", // Blue
  },
  {
    value: TransactionCategory.Clothes,
    label: "Clothes",
    color: "#9C27B0", // Purple
  },
  {
    value: TransactionCategory.Education,
    label: "Education",
    color: "#03A9F4", // Cyan
  },
  {
    value: TransactionCategory.Entertainment,
    label: "Entertainment",
    color: "#F44336", // Red
  },
  {
    value: TransactionCategory.Food,
    label: "Food",
    color: "#FFC107", // Amber
  },
  {
    value: TransactionCategory.Health,
    label: "Health",
    color: "#8BC34A", // Light Green
  },
  {
    value: TransactionCategory.Personal,
    label: "Personal",
    color: "#9E9E9E", // Gray
  },
  {
    value: TransactionCategory.Transportation,
    label: "Transportation",
    color: "#4CAF50", // Green
  },
  {
    value: TransactionCategory.Others,
    label: "Others",
    color: "#FF9800", // Orange
  },
]
