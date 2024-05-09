import { $blueText, $dimText, $screenContentContainer } from "../../core/styles/generalStyle"
import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { colors, spacing } from "../../theme"

import { AppStackScreenProps } from "../../navigators/AppNavigator"
import { Button } from "../../components/general/Button"
import { Screen } from "../../components/general/Screen"
import { Text } from "../../components/general/Text"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = function LoginScreen(_props) {
  const { navigation } = _props

  function login() {
    navigation.navigate("Tab", { screen: "Home" })
  }

  return (
    <Screen
      preset={"auto"}
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={[$screenContentContainer, { justifyContent: "space-between" }]}
    >
      <View>
        <Text text={"finflo~"} preset={"monoSemiBold"} style={$blueText} />
        <Text text={"An expense tracker app."} preset={"mono"} size={"xs"} style={$dimText} />
      </View>
      <Button text={"Continue"} style={$loginButton} preset={"default"} onPress={login} />
    </Screen>
  )
}

const $loginButton: ViewStyle = {
  marginTop: spacing.xs,
}
