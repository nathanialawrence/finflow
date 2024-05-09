import {
  $blueText,
  $screenContentContainer,
  $spaceBetweenContainer,
} from "../../core/styles/generalStyle"
import { TextStyle, View } from "react-native"
import { colors, spacing } from "../../theme"

import { AddTransactionButton } from "../../components/custom/AddTransactionButton"
import { BalanceContainer } from "../../components/module/home/BalanceContainer"
import { FC } from "react"
import IncomeExpenseContainer from "../../components/custom/IncomeExpenseContainer"
import { Screen } from "../../components/general/Screen"
import { TabNavigatorScreenProps } from "../../navigators/TabNavigator"
import { Text } from "../../components/general/Text"

export const HomeScreen: FC<TabNavigatorScreenProps<"Home">> = function HomeScreen(_props) {
  const { navigation } = _props

  const onAddTransaction = () => {
    navigation.navigate("AddTransaction")
  }

  return (
    <Screen preset={"fixed"} contentContainerStyle={$screenContentContainer}>
      <View>
        <Text text={"Welcome back,"} preset={"mono"} size="xs" style={$title} />
        <Text text={"Nathania Lawrence"} preset={"monoSemiBold"} size={"xl"} style={$blueText} />
      </View>
      <View style={{ marginVertical: spacing.lg }}>
        <BalanceContainer totalBalance={"Rp50.000.000"} />
        <View style={$spaceBetweenContainer}>
          <IncomeExpenseContainer
            icon="income"
            iconColor={colors.palette.income}
            title={"Income"}
            description={"Rp10.000.000"}
          />
          <IncomeExpenseContainer
            icon="expenses"
            iconColor={colors.palette.expense}
            title={"Expenses"}
            description={"Rp10.000.000"}
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
