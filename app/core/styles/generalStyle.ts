import { TextStyle, ViewStyle } from "react-native"
import { colors, spacing } from "../../theme"

export const $screenContentContainer: ViewStyle = {
  flex: 1,
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

export const $spaceBetweenContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}

export const $blueText: TextStyle = {
  color: colors.palette.blue800,
}

export const $dimText: TextStyle = {
  color: colors.textDim,
}
