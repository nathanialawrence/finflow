import { Controller, useFormContext } from "react-hook-form"
import React, { ComponentProps } from "react"

import { AmountTextField } from "../custom/AmountTextField"

interface Props {
  name: string
}

export default function RhfAmountTextField({
  name,
  ...props
}: Props & ComponentProps<typeof AmountTextField>) {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState }) => {
        return <AmountTextField value={value} onChangeText={onChange} {...props} />
      }}
    />
  )
}
