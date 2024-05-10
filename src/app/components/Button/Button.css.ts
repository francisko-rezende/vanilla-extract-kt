import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const baseStyles = style([
  sprinkles({ textSize: "base" }),
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

export const buttonStyles = styleVariants({
  primary: [
    baseStyles,
    {
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
  ],
  secondary: [
    baseStyles,
    {
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
  ],
});
