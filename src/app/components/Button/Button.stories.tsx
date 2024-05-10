import type { Meta, StoryObj } from "@storybook/react";

import { orangeTheme, purpleTheme } from "@/styles/theme.css";
import { Button, ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  component: Button,
  decorators: [
    (Story) => (
      <div className={orangeTheme}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      options: ["xs", "sm", "base", "lg", "xl"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryXs: Story = {
  args: {
    color: "primary",
    size: "xs",
    children: "Clique aqui",
  },
};
export const PrimarySm: Story = {
  args: {
    color: "primary",
    size: "sm",
    children: "Clique aqui",
  },
};

export const PrimaryBase: Story = {
  args: {
    color: "primary",
    size: "base",
    children: "Clique aqui",
  },
};

export const PrimaryLg: Story = {
  args: {
    color: "primary",
    size: "lg",
    children: "Clique aqui",
  },
};

export const PrimaryXl: Story = {
  args: {
    color: "primary",
    size: "xl",
    children: "Clique aqui",
  },
};

export const SecondaryXs: Story = {
  args: {
    color: "secondary",
    size: "xs",
    children: "Clique aqui",
  },
};

export const SecondarySm: Story = {
  args: {
    color: "secondary",
    size: "xs",
    children: "Clique aqui",
  },
};

export const SecondaryBase: Story = {
  args: {
    color: "secondary",
    size: "base",
    children: "Clique aqui",
  },
};

export const SecondaryLg: Story = {
  args: {
    color: "secondary",
    size: "lg",
    children: "Clique aqui",
  },
};

export const SecondaryXl: Story = {
  args: {
    color: "secondary",
    size: "xl",
    children: "Clique aqui",
  },
};
