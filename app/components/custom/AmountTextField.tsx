import React, { useState } from "react"

import { Text } from "../general/Text"
import { TextField } from "../general/TextField"
import { spacing } from "../../theme"

interface AmountTextFieldProps {
  label?: string
  required?: boolean
  placeholder?: string
  onChangeText?: (value: number) => void
}

export function AmountTextField(props: AmountTextFieldProps) {
  const { label, required = false, placeholder, onChangeText, ...rest } = props

  const [originalValue, setOriginalValue] = useState(0)
  const [formattedValue, setFormattedValue] = useState("")

  const handleTextChange = (text: string) => {
    const numericValue = text.replace(/\./g, "") // remove dots
    setOriginalValue(parseInt(numericValue, 10)) // update original value
    const formattedText = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".") // format with dots
    setFormattedValue(formattedText) // update formatted value
    onChangeText && onChangeText(originalValue)
  }

  return (
    <TextField
      label={label ?? "Transaction Amount"}
      required={required}
      placeholder={placeholder ?? "100.000"}
      value={formattedValue}
      onChangeText={handleTextChange}
      LeftAccessory={() => (
        <Text
          preset="textFieldValue"
          text="Rp"
          style={{ marginVertical: spacing.xs, marginLeft: spacing.sm }}
        />
      )}
    />
  )
}
