import { globalTheme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const buttonStyles = style({
  borderRadius: globalTheme.borderRadius["rounded-full"],
  background: globalTheme.colors.primary[500],
  border: `1px solid ${globalTheme.colors.primary[500]}`,
  color: globalTheme.colors.white,
  padding: `${globalTheme.spacing[2]} ${globalTheme.spacing[4]}`,
  cursor: "pointer",
  transition: "background 200ms",

  "@media": {
    "screen and (min-width: 768px)": {
      borderRadius: globalTheme.borderRadius.rounded,
    },
  },

  ":hover": {
    background: globalTheme.colors.primary[700],
    borderColor: globalTheme.colors.primary[700],
  },
  ":active": {
    background: globalTheme.colors.primary[300],
    borderColor: globalTheme.colors.primary[300],
  },
});
