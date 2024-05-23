import { colors, spacing } from "../../theme"

import { $rowContainer } from "../../core/styles/generalStyle"
import React from "react"
import { Text } from "../general/Text"
import { View } from "react-native"

interface LabelTextProps {
  label: string
  required?: boolean
}

export function LabelText(props: LabelTextProps) {
  const { label, required = false } = props

  return (
    <>
      <View style={$rowContainer}>
        <Text preset="formLabel" text={label} />
        {required && (
          <Text
            preset="formLabel"
            text={"*"}
            style={{ color: colors.error, marginLeft: spacing.xxxs }}
          />
        )}
      </View>
    </>
  )
}
