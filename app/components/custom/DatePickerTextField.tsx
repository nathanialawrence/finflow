import React, { useState } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { colors, spacing, typography } from "../../theme"

import DateTimePickerModal from "react-native-modal-datetime-picker"
import { LabelText } from "./LabelText"
import { Text } from "../general/Text"
import moment from "moment"

interface DatePickerTextFieldProps {
  label: string
  required?: boolean
  placeholder?: string
  onSelectDate?: (value: any) => void
}

export function DatePickerTextField(props: DatePickerTextFieldProps) {
  const { label, required = false, placeholder, onSelectDate, ...rest } = props

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [formattedDate, setFormattedDate] = useState<string>()

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (value: any) => {
    hideDatePicker()
    setFormattedDate(moment(value).format("MMM Do YY"))
    onSelectDate && onSelectDate(value)
  }
  return (
    <View>
      <LabelText label={label} required={required} />
      <TouchableOpacity style={$chipContainer} onPress={showDatePicker}>
        {formattedDate ? (
          <Text style={$labelStyle}>{formattedDate}</Text>
        ) : (
          <Text style={[$labelStyle, { color: colors.textDim }]}>
            {placeholder ?? "Choose date"}
          </Text>
        )}
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        accentColor={colors.palette.expense}
      />
    </View>
  )
}

const $chipContainer: ViewStyle = {
  paddingVertical: 8,
  paddingHorizontal: 12,
  marginRight: 10,
  marginBottom: spacing.xs,
  borderRadius: 4,
  borderWidth: 1,
  borderColor: colors.palette.neutral400,
}

const $labelStyle: TextStyle = {
  fontFamily: typography.secondary.normal,
  color: colors.text,
  fontSize: 14,
}
