import * as yup from "yup"

import {
  $blueText,
  $dimText,
  $rowContainer,
  $screenContentContainer,
} from "../../core/styles/generalStyle"
import { FormProvider, useForm } from "react-hook-form"
import { Keyboard, View } from "react-native"
import React, { FC } from "react"

import { AppStackScreenProps } from "../../navigators/AppNavigator"
import { Button } from "../../components/general/Button"
import RhfTextField from "../../components/rhf/RhfTextField"
import { Screen } from "../../components/general/Screen"
import { Text } from "../../components/general/Text"
import { setFullName } from "../../redux/actions/profileActions"
import { spacing } from "../../theme"
import { useDispatch } from "react-redux"
import { yupResolver } from "@hookform/resolvers/yup"

interface ProfileScreenProps extends AppStackScreenProps<"Profile"> {}

export const ProfileScreen: FC<ProfileScreenProps> = function WelcomeScreen(_props) {
  const { navigation } = _props
  const dispatch = useDispatch()
  const schema = yup
    .object({
      fullName: yup.string().min(3).required(),
    })
    .required()

  const method = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
    },
    resolver: yupResolver(schema),
  })

  const handleSubmitProfile = () => {
    Keyboard.dismiss()

    const fullName = method.getValues("fullName")
    dispatch(setFullName(fullName))

    navigation.navigate("Tab", { screen: "Home" })
  }

  return (
    <Screen
      preset={"auto"}
      contentContainerStyle={[$screenContentContainer, { justifyContent: "space-between" }]}
    >
      <View>
        <Text text={"Profile"} preset={"semiBold"} size={"xl"} />
        <View style={[$rowContainer, { alignContent: "flex-start" }]}>
          <Text>
            <Text preset={"default"} size={"xs"} style={$dimText}>
              Welcome to
            </Text>
            <Text preset={"default"} size={"xs"} style={$blueText}>
              {" "}
              finflow~
            </Text>
            <Text preset={"default"} size={"xs"} style={$dimText}>
              ! Can you please tell us your name before we continue?
            </Text>
          </Text>
        </View>
        <View style={{ marginVertical: spacing.md }}>
          <FormProvider {...method}>
            <RhfTextField
              name="fullName"
              label="Full Name"
              required
              placeholder="Ex: Jane Doe"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </FormProvider>
        </View>
      </View>
      {method.formState.isValid && <Button text="Continue" onPress={handleSubmitProfile} />}
    </Screen>
  )
}
