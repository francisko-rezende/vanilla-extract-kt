import React from "react";
import { buttonStyles } from "./Button.css";

type ButtonProps = React.ComponentProps<"button">;
export const Button = (props: ButtonProps) => {
  return <button className={buttonStyles} {...props} />;
};
