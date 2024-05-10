import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const buttonStyles = style({
  borderRadius: vars.borderRadius["rounded-full"],
  background: vars.colors.primary[500],
  border: `1px solid ${vars.colors.primary[500]}`,
  color: vars.colors.white,
  padding: `${vars.spacing[2]} ${vars.spacing[4]}`,
  cursor: "pointer",
  transition: "background 200ms",

  "@media": {
    "screen and (min-width: 768px)": {
      borderRadius: vars.borderRadius.rounded,
    },
  },
  ":hover": {
    background: vars.colors.primary[700],
    borderColor: vars.colors.primary[700],
  },
  ":active": {
    background: vars.colors.primary[300],
    borderColor: vars.colors.primary[300],
  },
});
