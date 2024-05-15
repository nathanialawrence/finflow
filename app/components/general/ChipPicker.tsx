import React, { useEffect, useState } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { colors, spacing, typography } from "../../theme"

import { LabelText } from "../custom/LabelText"
import { Text } from "./Text"

export interface ChipPickerItem {
  value: string
  label: string
  color?: string
}

interface ChipPickerProps {
  label: string
  required?: boolean
  data: ChipPickerItem[]
  value?: string
  onSelect?: (value: string) => void
  selectedColor?: string
}

export function ChipPicker(props: ChipPickerProps) {
  const { label, required = false, data, value, onSelect, selectedColor, ...rest } = props

  const [selectedItem, setSelectedItem] = useState<string | undefined>(value ?? undefined)

  useEffect(() => {
    console.log("value: ", selectedItem)
  }, [selectedItem])

  const handleSelect = (item: ChipPickerItem) => {
    setSelectedItem(item.value)
    onSelect && onSelect(item.value)
  }

  return (
    <View>
      <LabelText label={label} required={required} />
      <View style={$container}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.value}
            style={[
              $chipContainer,
              {
                borderColor:
                  selectedItem === item.value
                    ? item.color ?? colors.palette.blue800
                    : colors.palette.neutral400,
              },
            ]}
            onPress={() => handleSelect(item)}
          >
            <Text style={$labelStyle}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const $container: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
}

const $chipContainer: ViewStyle = {
  paddingVertical: 5,
  paddingHorizontal: 10,
  borderRadius: 4,
  marginRight: 10,
  borderWidth: 1,
  marginBottom: spacing.xs,
}

const $labelStyle: TextStyle = {
  fontFamily: typography.secondary.normal,
  color: colors.text,
  fontSize: 14,
}
