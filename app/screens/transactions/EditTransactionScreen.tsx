import * as yup from "yup"

import { $dangerText, $screenContentContainer } from "../../core/styles/generalStyle"
import { AppStackParamList, AppStackScreenProps } from "../../navigators/AppNavigator"
import { FormProvider, useForm } from "react-hook-form"
import React, { FC } from "react"
import { RouteProp, useRoute } from "@react-navigation/native"
import { TransactionCategory, TransactionType } from "../../models/transactions/Transaction"
import { deleteTransaction, editTransaction } from "../../redux/actions/transactionsActions"

import { Button } from "../../components/general/Button"
import RhfAmountTextField from "../../components/rhf/RhfAmountTextField"
import RhfChipPicker from "../../components/rhf/RhfChipPicker"
import RhfDatePickerTextField from "../../components/rhf/RhfDatePickerTextField"
import RhfTextField from "../../components/rhf/RhfTextField"
import { Screen } from "../../components/general/Screen"
import { Text } from "../../components/general/Text"
import { View } from "react-native"
import { goBack } from "../../navigators/navigationUtilities"
import { spacing } from "../../theme"
import { transactionCategoryData } from "../../data/transactions/transactionCategoryData"
import { transactionTypeData } from "../../data/transactions/transactionTypeData"
import { useDispatch } from "react-redux"
import { yupResolver } from "@hookform/resolvers/yup"

interface EditTransactionScreen extends AppStackScreenProps<"EditTransaction"> {}

export const EditTransactionScreen: FC<EditTransactionScreen> = function EditTransactionScreen(
  _props,
) {
  const dispatch = useDispatch()

  const route = useRoute<RouteProp<AppStackParamList, "EditTransaction">>()
  const { transactionItem } = route.params

  const schema = yup
    .object({
      title: yup.string().required(),
      type: yup.string().required(),
      category: yup.string().required(),
      amount: yup.number().required(),
      date: yup.string().required(),
      notes: yup.string(),
    })
    .required()

  const method = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      title: transactionItem.title,
      type: transactionItem.type,
      category: transactionItem.category,
      amount: transactionItem.amount,
      date: transactionItem.date,
      notes: transactionItem.notes,
    },
    resolver: yupResolver(schema),
  })

  const handleUpdateTransaction = () => {
    console.log(JSON.stringify(method.getValues(), null, 2))
    const transaction = method.getValues()
    const updatedTransaction = {
      id: transactionItem.id,
      title: transaction.title,
      type: transaction.type as TransactionType,
      category: transaction.category as TransactionCategory,
      amount: transaction.amount,
      date: transaction.date.toString(),
      notes: transaction.notes,
    }
    dispatch(editTransaction(updatedTransaction))
    goBack()
  }

  const handleDeleteTransaction = () => {
    dispatch(deleteTransaction(transactionItem.id))
    goBack()
  }

  return (
    <Screen preset={"scroll"} contentContainerStyle={$screenContentContainer}>
      <View style={{ flex: 1 }}>
        <Text text={"Update Transaction"} preset={"monoSemiBold"} size={"xl"} />
        <View style={{ marginVertical: 16 }}>
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
          <Button text="Update Transaction" onPress={handleUpdateTransaction} />
        )}
        <View style={{ height: spacing.md }} />
        <Button
          text="Delete Transaction"
          textStyle={$dangerText}
          onPress={handleDeleteTransaction}
        />
      </View>
    </Screen>
  )
}
