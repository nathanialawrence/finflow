import { Controller, useFormContext } from "react-hook-form"
import React, { ComponentProps } from "react"

import { ChipPicker } from "../general/ChipPicker"

interface Props {
  name: string
}

export default function RhfChipPicker({
  name,
  ...props
}: Props & ComponentProps<typeof ChipPicker>) {
  const { control, setValue } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState }) => {
        return (
          <ChipPicker
            onSelect={(value) => {
              setValue(name, value.value)
              onChange(value.value)
            }}
            {...props}
          />
        )
      }}
    />
  )
}
