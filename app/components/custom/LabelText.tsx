import { $labelStyle, $rowContainer } from "../../core/styles/generalStyle"

import React from "react"
import { Text } from "../general/Text"
import { View } from "react-native"
import { colors } from "../../theme"

interface LabelTextProps {
  label: string
  required?: boolean
}

export function LabelText(props: LabelTextProps) {
  const { label, required = false } = props

  return (
    <>
      <View style={$rowContainer}>
        <Text preset="formLabel" text={label} style={$labelStyle} />
        {required && (
          <Text
            preset="formLabel"
            text={"*"}
            style={[$labelStyle, { color: colors.error, marginLeft: 2 }]}
          />
        )}
      </View>
    </>
  )
}
