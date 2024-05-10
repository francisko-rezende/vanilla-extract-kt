import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const baseStyles = style([
  {
    borderRadius: vars.borderRadius["rounded-full"],
    borderWidth: 1,
    borderStyle: "solid",
    color: vars.colors.white,
    padding: `${vars.spacing[2]} ${vars.spacing[4]}`,
    cursor: "pointer",
    transition: "background 200ms",

    "@media": {
      "screen and (min-width: 768px)": {
        borderRadius: vars.borderRadius.rounded,
      },
    },
  },
]);

export const buttonStyles = recipe({
  base: baseStyles,
  variants: {
    color: {
      primary: {
        borderColor: vars.colors.primary[500],
        background: vars.colors.primary[500],
        ":hover": {
          background: vars.colors.primary[700],
          borderColor: vars.colors.primary[700],
        },
        ":active": {
          background: vars.colors.primary[300],
          borderColor: vars.colors.primary[300],
        },
      },

      secondary: {
        borderColor: vars.colors.secondary[500],
        background: vars.colors.secondary[500],
        ":hover": {
          background: vars.colors.secondary[700],
          borderColor: vars.colors.secondary[700],
        },
        ":active": {
          background: vars.colors.secondary[300],
          borderColor: vars.colors.secondary[300],
        },
      },
    },
    size: {
      xs: sprinkles({ textSize: "xs" }),
      sm: sprinkles({ textSize: "sm" }),
      base: sprinkles({ textSize: "base" }),
      lg: sprinkles({ textSize: "lg" }),
      xl: sprinkles({ textSize: "xl" }),
    },
  },
});
