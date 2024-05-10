import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem;",
  lg: "1.125rem",
  xl: "1.25rem",
};

const lineHeights = {
  xs: "1rem",
  sm: "1.25rem",
  base: "1.5rem",
  lg: "1.75rem",
  xl: "1.75rem",
};

const textSizeProperties = defineProperties({
  properties: { fontSize: fontSizes, lineHeight: lineHeights },
  shorthands: {
    textSize: ["fontSize", "lineHeight"],
  },
});

export const sprinkles = createSprinkles(textSizeProperties);
export type Sprinkles = Parameters<typeof sprinkles>;
