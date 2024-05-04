import React from "react"
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native"
import { typography } from "../../theme/typography"
import { colors } from "../../theme/colors"

type Sizes = keyof typeof $sizeStyles
type Weights = keyof typeof typography.primary
type Presets = keyof typeof $presets

export interface TextProps extends RNTextProps {
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>
  /**
   * One of the different types of text presets.
   */
  preset?: Presets
  /**
   * Text weight modifier.
   */
  weight?: Weights
  /**
   * Text size modifier.
   */
  size?: Sizes
  /**
   * Children components.
   */
  children?: React.ReactNode
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Text/}
 * @param {TextProps} props - The props for the `Text` component.
 * @returns {JSX.Element} The rendered `Text` component.
 */
export function Text(props: TextProps) {
  const { weight, size, text, children, style: $styleOverride, ...rest } = props

  const content = text || children

  const preset: Presets = props.preset ?? "default"
  const $styles: StyleProp<TextStyle> = [
    $presets[preset],
    weight && $fontWeightStyles[weight],
    size && $sizeStyles[size],
    $styleOverride,
  ]

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  )
}

const $sizeStyles = {
  xxl: { fontSize: 36, lineHeight: 44 } satisfies TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } satisfies TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } satisfies TextStyle,
  md: { fontSize: 18, lineHeight: 26 } satisfies TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } satisfies TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } satisfies TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } satisfies TextStyle,
}

const $fontWeightStyles = Object.entries(typography.primary).reduce((acc, [weight, fontFamily]) => {
  return { ...acc, [weight]: { fontFamily } }
}, {}) as Record<Weights, TextStyle>

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.normal,
  { color: colors.text },
]

const $monoStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.normal,
  { color: colors.text, fontFamily: typography.secondary.medium },
]

const $monoStyleSemiBold: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.normal,
  { color: colors.text, fontFamily: typography.secondary.semiBold },
]

const $monoStyleBold: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.normal,
  { color: colors.text, fontFamily: typography.secondary.bold },
]

const $presets = {
  default: $baseStyle,
  bold: [$baseStyle, $fontWeightStyles.bold] as StyleProp<TextStyle>,
  heading: [$baseStyle, $sizeStyles.xxl, $fontWeightStyles.bold] as StyleProp<TextStyle>,
  mono: [$monoStyle, $sizeStyles.xxl] as StyleProp<TextStyle>,
  monoBold: [$monoStyleBold, $sizeStyles.xxl] as StyleProp<TextStyle>,
  monoSemiBold: [$monoStyleSemiBold, $sizeStyles.xxl] as StyleProp<TextStyle>,
  subheading: [$baseStyle, $sizeStyles.lg, $fontWeightStyles.medium] as StyleProp<TextStyle>,
  formLabel: [$baseStyle, $fontWeightStyles.medium] as StyleProp<TextStyle>,
  formHelper: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.normal] as StyleProp<TextStyle>,
}
