import { Icon, IconTypes } from "../general/Icon"
import { colors, spacing } from "../../theme"

import React from "react"
import { Text } from "../general/Text"
import { View } from "react-native"

interface Props {
  icon: IconTypes
  iconColor: string
  title: string
  description: string
}

const IncomeExpenseContainer = (props: Props) => {
  return (
    <View
      style={{
        marginVertical: spacing.lg,
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.sm,
        borderWidth: 1,
        borderColor: colors.palette.neutral400,
        borderRadius: 4,
        backgroundColor: colors.palette.neutral200,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "48%",
      }}
    >
      <Icon icon={props.icon} color={props.iconColor} size={24} />
      <View style={{ paddingLeft: spacing.xs }}>
        <Text
          text={props.title}
          preset="mono"
          size="xxs"
          style={{
            color: colors.textDim,
          }}
        />
        <Text
          text={props.description}
          preset="monoSemiBold"
          size="xs"
          style={{
            color: colors.text,
          }}
        />
      </View>
    </View>
  )
}

export default IncomeExpenseContainer
