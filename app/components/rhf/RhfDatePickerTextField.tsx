import { Controller, useFormContext } from "react-hook-form"
import React, { ComponentProps } from "react"

import { DatePickerTextField } from "../custom/DatePickerTextField"

interface Props {
  name: string
}

export default function RhfDatePickerTextField({
  name,
  ...props
}: Props & ComponentProps<typeof DatePickerTextField>) {
  const { control, setValue } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => {
        return (
          <DatePickerTextField
            onSelectDate={(value) => {
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
