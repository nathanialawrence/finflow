import {
  $blueText,
  $screenContentContainer,
  $spaceBetweenContainer,
} from "../../core/styles/generalStyle"
import { TextStyle, View } from "react-native"
import { colors, spacing } from "../../theme"
import {
  totalBalanceSelector,
  totalExpenseSelector,
  totalIncomeSelector,
} from "../../redux/selectors/transactionsSelector"

import { AddTransactionButton } from "../../components/custom/AddTransactionButton"
import { BalanceContainer } from "../../components/module/home/BalanceContainer"
import { FC } from "react"
import IncomeExpenseContainer from "../../components/custom/IncomeExpenseContainer"
import { Screen } from "../../components/general/Screen"
import { TabNavigatorScreenProps } from "../../navigators/TabNavigator"
import { Text } from "../../components/general/Text"
import { formatNumber } from "../../utils/formatter/formatTransactions"
import { fullNameSelector } from "../../redux/selectors/profileSelector"
import { useSelector } from "react-redux"

export const HomeScreen: FC<TabNavigatorScreenProps<"Home">> = function HomeScreen(_props) {
  const { navigation } = _props

  const fullName = useSelector(fullNameSelector)
  const totalBalance: number = useSelector(totalBalanceSelector)
  const totalIncome: number = useSelector(totalIncomeSelector)
  const totalExpense: number = useSelector(totalExpenseSelector)

  const onAddTransaction = () => {
    navigation.navigate("AddTransaction")
  }

  return (
    <Screen preset={"fixed"} contentContainerStyle={$screenContentContainer}>
      <View>
        <Text text={"Welcome back,"} preset={"mono"} size="xs" style={$title} />
        <Text text={fullName} preset={"monoSemiBold"} size={"xl"} style={$blueText} />
      </View>
      <View style={{ marginVertical: spacing.lg }}>
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
      <AddTransactionButton onPress={onAddTransaction} />
    </Screen>
  )
}

const $title: TextStyle = {
  color: colors.textDim,
  marginBottom: spacing.xxxs,
}
