import { Controller, useFormContext } from "react-hook-form"
import React, { ComponentProps } from "react"

import { TextField } from "../general/TextField"

interface Props {
  name: string
}

export default function RhfTextField({ name, ...props }: Props & ComponentProps<typeof TextField>) {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState }) => {
        return <TextField onBlur={onBlur} onChangeText={onChange} value={value} {...props} />
      }}
    />
  )
}
