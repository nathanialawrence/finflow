import { ChipPicker, ChipPickerItem } from "../general/ChipPicker"
import { Controller, useFormContext } from "react-hook-form"
import React, { ComponentProps } from "react"

interface Props {
  name: string
  defaultValue?: ChipPickerItem
}

export default function RhfChipPicker({
  name,
  defaultValue,
  ...props
}: Props & ComponentProps<typeof ChipPicker>) {
  const { control, setValue } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState }) => {
        return (
          <ChipPicker
            value={value}
            onSelect={(value) => {
              setValue(name, value)
              onChange(value)
            }}
            {...props}
          />
        )
      }}
    />
  )
}
