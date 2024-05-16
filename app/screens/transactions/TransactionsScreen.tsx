import {
  $dimText,
  $emptyStateContainer,
  $screenContentContainer,
} from "../../core/styles/generalStyle"
import { FlatList, View } from "react-native"
import React, { FC } from "react"
import { useDispatch, useSelector } from "react-redux"

import { AddTransactionButton } from "../../components/custom/AddTransactionButton"
import { Screen } from "../../components/general/Screen"
import { TabNavigatorScreenProps } from "../../navigators/TabNavigator"
import { Text } from "../../components/general/Text"
import { Transaction } from "../../models/transactions/Transaction"
import { TransactionItem } from "../../components/custom/TransactionItem"
import { transactionsSelector } from "../../redux/selectors/transactionsSelector"

export const TransactionsScreen: FC<TabNavigatorScreenProps<"Transactions">> =
  function TransactionsScreen(_props) {
    const { navigation } = _props

    const transactions: Transaction[] = useSelector(transactionsSelector)

    const onAddTransaction = () => {
      navigation.navigate("AddTransaction")
    }

    const onTransactionPress = (transactionItem: Transaction) => {
      navigation.navigate("EditTransaction", { transactionItem })
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
            return (
              <TransactionItem
                index={index}
                data={transactions}
                item={item}
                onTransactionPress={() => onTransactionPress(item)}
              />
            )
          }}
          ListEmptyComponent={() => {
            return (
              <View style={$emptyStateContainer}>
                <Text
                  text={"You have no transactions yet."}
                  preset={"mono"}
                  size={"md"}
                  style={[$dimText, { textAlign: "center" }]}
                />
              </View>
            )
          }}
        />
        <AddTransactionButton onPress={onAddTransaction} />
      </Screen>
    )
  }
