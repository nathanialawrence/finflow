import {
  $blueText,
  $dimText,
  $emptyStateContainer,
  $screenContentContainer,
  $spaceBetweenContainer,
} from "../../core/styles/generalStyle"
import { FlatList, Pressable, TextStyle, View } from "react-native"
import { colors, spacing } from "../../theme"
import {
  totalBalanceSelector,
  totalExpenseSelector,
  totalIncomeSelector,
  transactionsSelector,
} from "../../redux/selectors/transactionsSelector"

import { AddTransactionButton } from "../../components/custom/AddTransactionButton"
import { BalanceContainer } from "../../components/module/home/BalanceContainer"
import { FC } from "react"
import IncomeExpenseContainer from "../../components/custom/IncomeExpenseContainer"
import { Screen } from "../../components/general/Screen"
import { TabNavigatorScreenProps } from "../../navigators/TabNavigator"
import { Text } from "../../components/general/Text"
import { Transaction } from "../../models/transactions/Transaction"
import { TransactionItem } from "../../components/custom/TransactionItem"
import { formatNumber } from "../../utils/formatter/formatTransactions"
import { fullNameSelector } from "../../redux/selectors/profileSelector"
import { useSelector } from "react-redux"

export const HomeScreen: FC<TabNavigatorScreenProps<"Home">> = function HomeScreen(_props) {
  const { navigation } = _props

  const fullName = useSelector(fullNameSelector)
  const totalBalance: number = useSelector(totalBalanceSelector)
  const totalIncome: number = useSelector(totalIncomeSelector)
  const totalExpense: number = useSelector(totalExpenseSelector)
  const transactions: Transaction[] = useSelector(transactionsSelector)

  const onAddTransaction = () => {
    navigation.navigate("AddTransaction")
  }

  const onChangeName = () => {
    navigation.navigate("EditProfile")
  }

  const onTransactionPress = (transactionItem: Transaction) => {
    navigation.navigate("EditTransaction", { transactionItem })
  }

  return (
    <Screen preset={"fixed"} contentContainerStyle={$screenContentContainer}>
      <FlatList
        data={transactions.slice(0, 10)}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <View>
              <View>
                <Text text={"Welcome back,"} preset={"default"} size="xs" style={$title} />
                <Pressable onPress={onChangeName}>
                  <Text text={fullName} preset={"semiBold"} size={"xl"} style={$blueText} />
                </Pressable>
              </View>
              <View style={{ marginTop: spacing.lg, marginBottom: spacing.md }}>
                <BalanceContainer totalBalance={formatNumber(totalBalance)} />
                <View style={$spaceBetweenContainer}>
                  <IncomeExpenseContainer
                    icon="income"
                    iconColor={colors.palette.income}
                    title={"Income"}
                    description={formatNumber(totalIncome)}
                  />
                  <IncomeExpenseContainer
                    icon="expenses"
                    iconColor={colors.palette.expense}
                    title={"Expenses"}
                    description={formatNumber(totalExpense)}
                  />
                </View>
              </View>
              <Text text={"Latest Transactions"} preset={"semiBold"} size={"lg"} />
            </View>
          )
        }}
        ListHeaderComponentStyle={{ marginBottom: spacing.xs }}
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
                text={"You have no recent transactions."}
                preset={"default"}
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

const $title: TextStyle = {
  color: colors.textDim,
  marginBottom: spacing.xxxs,
}
