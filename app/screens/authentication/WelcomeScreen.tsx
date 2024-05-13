import { $blueText, $dimText, $screenContentContainer } from "../../core/styles/generalStyle"
import React, { FC } from "react"

import { AppStackScreenProps } from "../../navigators/AppNavigator"
import { Button } from "../../components/general/Button"
import { Screen } from "../../components/general/Screen"
import { Text } from "../../components/general/Text"
import { View } from "react-native"
import { fullNameSelector } from "../../redux/selectors/profileSelector"
import { useSelector } from "react-redux"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = function WelcomeScreen(_props) {
  const { navigation } = _props

  const fullName = useSelector(fullNameSelector)

  function checkProfile() {
    if (fullName) {
      navigation.navigate("Tab", { screen: "Home" })
    } else {
      navigation.navigate("Profile")
    }
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
      <Button text={"Continue"} preset={"default"} onPress={checkProfile} />
    </Screen>
  )
}
