import type { Meta, StoryObj } from "@storybook/react";
import { Basket } from "react-bootstrap-icons";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Кнопка",
    primary: true,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: "Кнопка",
    primary: true,
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    children: "Кнопка",
  },
};

export const SecondaryDisabled: Story = {
  args: {
    children: "Кнопка",
    disabled: true,
  },
};

export const PrimaryIcon: Story = {
  args: {
    children: "Кнопка",
    primary: true,
    startIcon: <Basket />,
  },
};

export const SecondaryIcon: Story = {
  args: {
    children: "Кнопка",
    startIcon: <Basket />,
  },
};
