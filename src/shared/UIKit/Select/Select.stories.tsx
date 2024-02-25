import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./ui/Select";

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

const exampleOptions = [
  {
    id: 1,
    title: "Option 1",
  },
  {
    id: 2,
    title: "Option 2",
  },
  {
    id: 3,
    title: "Option 3",
  },
];

export const Primary: Story = {
  args: {
    label: "Форма собственности",
    options: exampleOptions,
    onChange: () => {},
  },
};
