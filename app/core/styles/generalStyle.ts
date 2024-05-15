import { TextStyle, ViewStyle } from "react-native"
import { colors, spacing, typography } from "../../theme"

export const $rowContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

export const $screenContentContainer: ViewStyle = {
  flexGrow: 1,
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

export const $dangerText: TextStyle = {
  color: colors.palette.angry500,
}

export const $dimText: TextStyle = {
  color: colors.textDim,
}

export const $labelStyle: TextStyle = {
  fontFamily: typography.secondary.medium,
  fontSize: 14,
  marginBottom: spacing.xs,
}
