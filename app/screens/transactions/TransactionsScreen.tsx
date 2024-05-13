import React, { FC } from "react"
import { useDispatch, useSelector } from "react-redux"

import { $screenContentContainer } from "../../core/styles/generalStyle"
import { AddTransactionButton } from "../../components/custom/AddTransactionButton"
import { Button } from "../../components/general/Button"
import { FlatList } from "react-native"
import { Screen } from "../../components/general/Screen"
import { TabNavigatorScreenProps } from "../../navigators/TabNavigator"
import { Text } from "../../components/general/Text"
import { Transaction } from "../../models/transactions/Transaction"
import { TransactionItem } from "../../components/custom/TransactionItem"
import { deleteAllTransactions } from "../../redux/actions/transactionsActions"
import { transactionsSelector } from "../../redux/selectors/transactionsSelector"

export const TransactionsScreen: FC<TabNavigatorScreenProps<"Transactions">> =
  function TransactionsScreen(_props) {
    const { navigation } = _props
    const dispatch = useDispatch()

    const transactions: Transaction[] = useSelector(transactionsSelector)

    const onAddTransaction = () => {
      navigation.navigate("AddTransaction")
    }

    return (
      <Screen preset={"fixed"} contentContainerStyle={$screenContentContainer}>
        <FlatList
          data={transactions}
          contentContainerStyle={{ flexGrow: 1 }}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => {
            return <Text text={"Transactions"} preset={"monoSemiBold"} size={"xl"} />
          }}
          ListHeaderComponentStyle={{ marginBottom: 8 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ index, item }) => {
            return <TransactionItem index={index} data={transactions} item={item} />
          }}
        />
        <Button
          text="Clear all transactions"
          onPress={() => {
            dispatch(deleteAllTransactions())
          }}
        />
        <AddTransactionButton onPress={onAddTransaction} />
      </Screen>
    )
  }
