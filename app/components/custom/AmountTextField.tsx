import React, { useState } from "react"

import { Text } from "../general/Text"
import { TextField } from "../general/TextField"
import { spacing } from "../../theme"

export function AmountTextField() {
  const [originalValue, setOriginalValue] = useState(0)
  const [formattedValue, setFormattedValue] = useState("")

  const handleTextChange = (text: string) => {
    const numericValue = text.replace(/\./g, "") // remove dots
    setOriginalValue(parseInt(numericValue, 10)) // update original value
    const formattedText = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".") // format with dots
    setFormattedValue(formattedText) // update formatted value
  }

  return (
    <TextField
      label="Amount"
      value={formattedValue}
      onChangeText={handleTextChange}
      LeftAccessory={(props) => (
        <Text
          preset="textFieldValue"
          text="Rp"
          style={{ marginVertical: spacing.xs, marginLeft: spacing.sm }}
        />
      )}
    />
  )
}
