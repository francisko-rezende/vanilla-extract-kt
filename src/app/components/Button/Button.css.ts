import { style } from "@vanilla-extract/css";

export const buttonStyles = style({
  backgroundColor: "goldenrod",
  color: "white",
  "@media": {
    "screen and (min-width: 500px)": {
      backgroundColor: "red",
    },
  },
  ":hover": {
    backgroundColor: "aqua",
  },
});
