import * as React from "react"

import { View } from "react-native"
import { colors } from "../../theme"

interface Props {
  variant?: "solid" | "dotted"
  size?: "xs" | "sm" | "md" | "lg"
}

export default function Divider({
  variant,
  size = "xs",
  ...props
}: Props & React.ComponentProps<typeof View>) {
  let borderWidth = 1
  switch (size) {
    case "xs": {
      borderWidth = 1
      break
    }
    case "sm": {
      borderWidth = 5
      break
    }
    case "md": {
      borderWidth = 6
      break
    }
    case "lg": {
      borderWidth = 8
      break
    }
  }
  return (
    <View
      style={[
        {
          borderStyle: variant == "dotted" ? "dotted" : "solid",
          borderTopWidth: borderWidth,
          borderTopColor: colors.palette.neutral400,
        },
        props.style,
      ]}
    ></View>
  )
}
