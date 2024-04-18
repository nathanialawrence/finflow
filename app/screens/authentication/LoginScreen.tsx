import React, { FC } from "react"
import { AppStackScreenProps } from "../../navigators/AppNavigator"

import { Screen } from "../../components/Screen"
import { Text } from "../../components/Text"
import { TextStyle, View, ViewStyle } from "react-native"
import { colors, spacing } from "../../theme"
import { Button } from "../../components/Button"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = function LoginScreen(_props) {
  const { navigation } = _props

  function login() {
    navigation.navigate("Tab", { screen: "Home" })
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <View>
        <Text text={"Welcome to"} preset="heading" style={$signIn} />
        <Text text={"finflow"} preset="monoHeading" style={$appName} />
      </View>
      <Button text="Continue" style={$tapButton} preset="reversed" onPress={login} />
    </Screen>
  )
}

const $screenContentContainer: ViewStyle = {
  flex: 1,
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
  justifyContent: "space-between",
}

const $signIn: TextStyle = {
  marginBottom: spacing.xs,
}

const $appName: TextStyle = {
  color: colors.palette.blue800,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
}
