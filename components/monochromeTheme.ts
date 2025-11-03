import { createLightTheme, BrandVariants } from "@fluentui/react-components";

/**
 * Monochrome brand colors - neutral grays for professional, enterprise look
 */
const monochromeBrand: BrandVariants = {
  10: "#111111",
  20: "#1a1a1a",
  30: "#262626",
  40: "#404040",
  50: "#595959",
  60: "#737373",
  70: "#8c8c8c",
  80: "#a6a6a6",
  90: "#bfbfbf",
  100: "#d9d9d9",
  110: "#e5e5e5",
  120: "#f0f0f0",
  130: "#f5f5f5",
  140: "#fafafa",
  150: "#ffffff",
  160: "#ffffff",
};

/**
 * Monochrome theme - enterprise-grade grayscale design
 * Based on Fluent UI light theme with neutral brand colors
 */
export const monochromeTheme = createLightTheme(monochromeBrand);

