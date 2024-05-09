import { Button, ButtonAccessoryProps } from "../general/Button"
import React, { ComponentType, useMemo } from "react"

import { Icon } from "../general/Icon"
import { View } from "react-native"
import { colors } from "../../theme"

interface AddTransactionProps {
  onPress: () => void
}

export function AddTransactionButton(props: AddTransactionProps) {
  const ButtonLeftAccessory: ComponentType<ButtonAccessoryProps> = useMemo(
    () =>
      function ButtonLeftAccessory() {
        return (
          <View>
            <Icon icon="wallet" size={28} color={colors.palette.blue800} />
          </View>
        )
      },
    [],
  )

  return (
    <View style={{ position: "absolute", bottom: 16, right: 16 }}>
      <Button LeftAccessory={ButtonLeftAccessory} onPress={props.onPress} />
    </View>
  )
}
