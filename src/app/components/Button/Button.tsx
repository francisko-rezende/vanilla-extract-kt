import React from "react";
import { buttonStyles } from "./Button.css";

type ButtonProps = React.ComponentProps<"button"> & {
  variant: keyof typeof buttonStyles;
};
export const Button = ({ variant = "secondary", ...props }: ButtonProps) => {
  return <button className={buttonStyles[variant]} {...props} />;
};
