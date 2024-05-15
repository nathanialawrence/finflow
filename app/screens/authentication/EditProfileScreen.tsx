import * as yup from "yup"

import { $dimText, $rowContainer, $screenContentContainer } from "../../core/styles/generalStyle"
import { FormProvider, useForm } from "react-hook-form"
import { Keyboard, View } from "react-native"
import React, { FC } from "react"
import { useDispatch, useSelector } from "react-redux"

import { AppStackScreenProps } from "../../navigators/AppNavigator"
import { Button } from "../../components/general/Button"
import RhfTextField from "../../components/rhf/RhfTextField"
import { Screen } from "../../components/general/Screen"
import { Text } from "../../components/general/Text"
import { fullNameSelector } from "../../redux/selectors/profileSelector"
import { goBack } from "../../navigators/navigationUtilities"
import { setFullName } from "../../redux/actions/profileActions"
import { yupResolver } from "@hookform/resolvers/yup"

interface EditProfileScreenProps extends AppStackScreenProps<"EditProfile"> {}

export const EditProfileScreen: FC<EditProfileScreenProps> = function EditProfileScreen(_props) {
  const dispatch = useDispatch()
  const fullName = useSelector(fullNameSelector)

  const schema = yup
    .object({
      fullName: yup.string().min(3).required(),
    })
    .required()

  const method = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: fullName,
    },
    resolver: yupResolver(schema),
  })

  const handleSubmitProfile = () => {
    Keyboard.dismiss()

    const fullName = method.getValues("fullName")
    dispatch(setFullName(fullName))

    goBack()
  }

  return (
    <Screen
      preset={"auto"}
      contentContainerStyle={[$screenContentContainer, { justifyContent: "space-between" }]}
    >
      <View>
        <Text text={"Edit Profile"} preset={"monoSemiBold"} size={"xl"} />
        <View style={[$rowContainer, { alignContent: "flex-start" }]}>
          <Text preset={"mono"} size={"xs"} style={$dimText}>
            Change your display name below!
          </Text>
        </View>
        <View style={{ marginVertical: 16 }}>
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
