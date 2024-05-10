import React from "react";
import { buttonStyles } from "./Button.css";
import { RecipeVariants } from "@vanilla-extract/recipes";

type ButtonProps = React.ComponentProps<"button"> &
  RecipeVariants<typeof buttonStyles>;
export const Button = ({
  size = "base",
  color = "secondary",
  ...props
}: ButtonProps) => {
  return <button className={buttonStyles({ size, color })} {...props} />;
};
