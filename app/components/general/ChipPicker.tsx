import React, { useState } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { colors, spacing, typography } from "../../theme"

import { Text } from "./Text"

export interface ChipPickerItem {
  value: string
  label: string
  color?: string
}

interface ChipPickerProps {
  label: string
  data: ChipPickerItem[]
  value?: ChipPickerItem
  onSelect: (value: ChipPickerItem) => void
  selectedColor?: string
}

export function ChipPicker(props: ChipPickerProps) {
  const [selectedItem, setSelectedItem] = useState<ChipPickerItem>()

  const handleSelect = (item: ChipPickerItem) => {
    setSelectedItem(item)
    props.onSelect(item)
  }

  return (
    <View>
      <Text preset="formLabel" text={props.label} />
      <View style={$container}>
        {props.data.map((item) => (
          <TouchableOpacity
            key={item.value}
            style={[
              $chipContainer,
              {
                borderColor:
                  selectedItem === item
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
