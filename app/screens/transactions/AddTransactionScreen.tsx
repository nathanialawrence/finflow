import { ChipPicker, ChipPickerItem } from "../../components/general/ChipPicker"
import React, { FC, useState } from "react"
import { TransactionCategory, TransactionType } from "../../models/transactions/Transaction"

import { $screenContentContainer } from "../../core/styles/generalStyle"
import { AmountTextField } from "../../components/custom/AmountTextField"
import { AppStackScreenProps } from "../../navigators/AppNavigator"
import { Screen } from "../../components/general/Screen"
import { Text } from "../../components/general/Text"
import { TextField } from "../../components/general/TextField"
import { View } from "react-native"
import { colors } from "../../theme"

const transactionTypeData = [
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

interface AddTransactionScreenProps extends AppStackScreenProps<"AddTransaction"> {}

export const AddTransactionScreen: FC<AddTransactionScreenProps> = function AddTransactionsScreen(
  _props,
) {
  const [selectedItem, setSelectedItem] = useState<ChipPickerItem>()

  const handleSelect = (value: ChipPickerItem) => {
    setSelectedItem(value)
  }
  return (
    <Screen preset={"auto"} contentContainerStyle={$screenContentContainer}>
      <Text text={"Add Transaction"} preset={"monoSemiBold"} size={"xl"} />
      <View style={{ marginVertical: 16 }}>
        <TextField
          label="Title"
          placeholder="Transaction title"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <ChipPicker
          label="Transaction Type"
          data={transactionTypeData}
          value={selectedItem}
          onSelect={handleSelect}
        />
        <ChipPicker
          label="Transaction Category"
          data={transactionCategoryData}
          value={selectedItem}
          onSelect={handleSelect}
        />
        <AmountTextField />
      </View>
    </Screen>
  )
}
