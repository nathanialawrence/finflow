export enum TransactionType {
  Expense = "expense",
  Income = "income",
}

export enum TransactionCategory {
  Food = "Food",
  Clothes = "Clothes",
  Bills = "Bills",
  Entertainment = "Entertainment",
  Transportation = "Transportation",
  Health = "Health",
  Education = "Education",
  Personal = "Personal",
  Others = "Others",
}

export interface Transaction {
  id: string
  type: TransactionType
  category: TransactionCategory
  amount: number
  date: string
  title: string
  notes?: string
}
