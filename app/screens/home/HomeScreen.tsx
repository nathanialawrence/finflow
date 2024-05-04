import {
  $blueText,
  $dimText,
  $screenContentContainer,
  $spaceBetweenContainer,
} from "../../core/styles/generalStyle"
import { TextStyle, View } from "react-native"
import { colors, spacing } from "../../theme"

import { FC } from "react"
import IncomeExpenseContainer from "../../components/custom/IncomeExpenseContainer"
import { Screen } from "../../components/general/Screen"
import { TabNavigatorScreenProps } from "../../navigators/TabNavigator"
import { Text } from "../../components/general/Text"

export const HomeScreen: FC<TabNavigatorScreenProps<"Home">> = function HomeScreen(_props) {
  return (
    <Screen preset={"auto"} contentContainerStyle={$screenContentContainer}>
      <View>
        <Text text={"Welcome back,"} preset={"mono"} size="xs" style={$title} />
        <Text text={"Nathania Lawrence"} preset={"monoSemiBold"} size={"xl"} style={$blueText} />
      </View>
      <View style={{ marginVertical: spacing.lg }}>
        <Text text={"Balance"} preset={"mono"} size={"xs"} style={$dimText} />
        <Text text={"Rp50.000.000"} preset={"monoSemiBold"} size="xxl" />
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
    </Screen>
  )
}

const $title: TextStyle = {
  color: colors.textDim,
  marginBottom: spacing.xxxs,
}

const $blue: TextStyle = {
  color: colors.palette.blue800,
}
