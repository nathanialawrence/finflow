import * as yup from "yup"

import { FormProvider, useForm } from "react-hook-form"
import React, { FC } from "react"
import { TransactionCategory, TransactionType } from "../../models/transactions/Transaction"

import { $screenContentContainer } from "../../core/styles/generalStyle"
import { AppStackScreenProps } from "../../navigators/AppNavigator"
import { Button } from "../../components/general/Button"
import RhfAmountTextField from "../../components/rhf/RhfAmountTextField"
import RhfChipPicker from "../../components/rhf/RhfChipPicker"
import RhfDatePickerTextField from "../../components/rhf/RhfDatePickerTextField"
import RhfTextField from "../../components/rhf/RhfTextField"
import { Screen } from "../../components/general/Screen"
import { Text } from "../../components/general/Text"
import { View } from "react-native"
import { addTransaction } from "../../redux/actions/transactionsActions"
import { goBack } from "../../navigators/navigationUtilities"
import { spacing } from "../../theme"
import { transactionCategoryData } from "../../data/transactions/transactionCategoryData"
import { transactionTypeData } from "../../data/transactions/transactionTypeData"
import { useDispatch } from "react-redux"
import uuid from "react-native-uuid"
import { yupResolver } from "@hookform/resolvers/yup"

interface AddTransactionScreenProps extends AppStackScreenProps<"AddTransaction"> {}

export const AddTransactionScreen: FC<AddTransactionScreenProps> = function AddTransactionScreen(
  _props,
) {
  const dispatch = useDispatch()

  const schema = yup
    .object({
      title: yup.string().required(),
      type: yup.string().required(),
      category: yup.string().required(),
      amount: yup.number().min(1).required(),
      date: yup.string().required(),
      notes: yup.string(),
    })
    .required()

  const method = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      title: "",
      type: "",
      category: "",
      amount: undefined,
      date: "",
      notes: "",
    },
    resolver: yupResolver(schema),
  })

  const handleAddTransaction = () => {
    const transaction = method.getValues()
    const newTransaction = {
      id: uuid.v4() as string,
      title: transaction.title,
      type: transaction.type as TransactionType,
      category: transaction.category as TransactionCategory,
      amount: transaction.amount,
      date: transaction.date.toString(),
      notes: transaction.notes,
    }
    dispatch(addTransaction(newTransaction))
    goBack()
  }

  return (
    <Screen preset={"scroll"} contentContainerStyle={$screenContentContainer}>
      <View style={{ flex: 1 }}>
        <Text text={"Add Transaction"} preset={"semiBold"} size={"xl"} />
        <View style={{ marginVertical: spacing.md }}>
          <FormProvider {...method}>
            <RhfTextField
              name="title"
              label="Title"
              required
              placeholder="Transaction title"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <RhfChipPicker name="type" label="Type" data={transactionTypeData} />
            <RhfChipPicker name="category" label="Category" data={transactionCategoryData} />
            <RhfAmountTextField name="amount" label="Amount" required placeholder="100.000" />
            <RhfDatePickerTextField name="date" label="Date" required />
            <RhfTextField
              name="notes"
              label="Notes"
              placeholder="Additional notes..."
              autoCapitalize="none"
              autoCorrect={false}
              multiline
            />
          </FormProvider>
        </View>
        {method.formState.isValid && (
          <Button text="Add Transaction" onPress={handleAddTransaction} />
        )}
      </View>
    </Screen>
  )
}
