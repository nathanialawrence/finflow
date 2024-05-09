import React, { FC } from "react"
import {
  Transaction,
  TransactionCategory,
  TransactionType,
} from "../../models/transactions/Transaction"
import { useDispatch, useSelector } from "react-redux"

import { $screenContentContainer } from "../../core/styles/generalStyle"
import { AddTransactionButton } from "../../components/custom/AddTransactionButton"
import { FlatList } from "react-native"
import { Screen } from "../../components/general/Screen"
import { TabNavigatorScreenProps } from "../../navigators/TabNavigator"
import { Text } from "../../components/general/Text"
import { TransactionItem } from "../../components/custom/TransactionItem"

export const TransactionsScreen: FC<TabNavigatorScreenProps<"Transactions">> =
  function TransactionsScreen(_props) {
    const { navigation } = _props
    const dispatch = useDispatch()
    const transactions: Transaction[] = useSelector(
      (state: any) => state.transactionsReducer.transactions,
    )

    const dummyTransaction: Transaction[] = [
      {
        id: "1234567890",
        type: TransactionType.Expense,
        category: TransactionCategory.Food,
        amount: 25.99,
        date: "2023-03-15",
        title: "Lunch with friends",
        notes: "Had a great time catching up with old friends",
      },
      {
        id: "1234567891",
        type: TransactionType.Income,
        category: TransactionCategory.Food,
        amount: 25.99,
        date: "2023-03-15",
        title: "Salary",
        notes: "Testings",
      },
      {
        id: "1234567892",
        type: TransactionType.Expense,
        category: TransactionCategory.Food,
        amount: 25.99,
        date: "2023-04-15",
        title: "Lunch with friends",
      },
      {
        id: "1234567893",
        type: TransactionType.Income,
        category: TransactionCategory.Food,
        amount: 25.99,
        date: "2023-05-15",
        title: "Salary",
        notes: "Had a great time catching up with old friends",
      },
    ]

    const onAddTransaction = () => {
      navigation.navigate("AddTransaction")
    }

    return (
      <Screen preset={"fixed"} contentContainerStyle={$screenContentContainer}>
        <FlatList
          data={dummyTransaction}
          contentContainerStyle={{ flexGrow: 1 }}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => {
            return <Text text={"Transactions"} preset={"monoSemiBold"} size={"xl"} />
          }}
          ListHeaderComponentStyle={{ marginBottom: 8 }}
          renderItem={({ index, item }) => {
            return <TransactionItem index={index} data={dummyTransaction} item={item} />
          }}
        />
        {/* <Button
          text="Test"
          onPress={() => {
            const newTransaction = {
              id: uuid.v4() as string,
              title: "test",
              amount: parseFloat("1000000"),
              date: "2023-01-15",
              category: TransactionCategory.Bills,
              type: TransactionType.Expense,
              notes: "aaa",
            }
            dispatch(addTransaction(newTransaction))
          }}
        /> */}
        <AddTransactionButton onPress={onAddTransaction} />
      </Screen>
    )
  }
