import { FlatList, View } from "react-native"
import React, { FC } from "react"
import {
  Transaction,
  TransactionCategory,
  TransactionType,
} from "../../models/transactions/Transaction"
import { useDispatch, useSelector } from "react-redux"

import { $screenContentContainer } from "../../core/styles/generalStyle"
import { Button } from "../../components/general/Button"
import { Screen } from "../../components/general/Screen"
import { TabNavigatorScreenProps } from "../../navigators/TabNavigator"
import { Text } from "../../components/general/Text"
import { addTransaction } from "../../redux/actions/transactionsActions"
import uuid from "react-native-uuid"

export const TransactionsScreen: FC<TabNavigatorScreenProps<"Transactions">> =
  function TransactionsScreen(_props) {
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
    ]

    return (
      <Screen preset={"auto"} contentContainerStyle={$screenContentContainer}>
        <Text text={"Transactions"} preset={"monoSemiBold"} size={"xl"} />
        <FlatList
          data={dummyTransaction}
          contentContainerStyle={{ flexGrow: 1 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ paddingVertical: 6, borderWidth: 1, backgroundColor: "pink" }}>
                <Text text={item.title} preset={"mono"} size="xs" />
              </View>
            )
          }}
        />
        <Button
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
        />
      </Screen>
    )
  }
