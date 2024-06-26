import { TextStyle, ViewStyle } from "react-native"
import { colors, spacing } from "../../theme"

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

export const $emptyStateContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  margin: 12,
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
