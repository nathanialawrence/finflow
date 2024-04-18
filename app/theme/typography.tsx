const fonts = {
  poppins: {
    light: "Poppins-Light",
    normal: "Poppins-Regular",
    medium: "Poppins-Medium",
    semiBold: "Poppins-SemiBold",
    bold: "Poppins-Bold",
  },
  monospace: {
    light: "IBMPlexMono-Light",
    normal: "IBMPlexMono-Regular",
    medium: "IBMPlexMono-Medium",
    semiBold: "IBMPlexMono-SemiBold",
    bold: "IBMPlexMono-Bold",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.poppins,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: fonts.monospace,
  /**
   * Lets get fancy with a monospace font!
   */
  code: fonts.monospace,
}
