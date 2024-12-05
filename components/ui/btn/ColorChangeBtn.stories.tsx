import type { Meta, StoryObj } from "@storybook/react";

import ColorChangeBtn from "./ColorChangeBtn";

const meta: Meta<typeof ColorChangeBtn> = {
  component: ColorChangeBtn,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ColorChangeBtn>;

export const Red: Story = {
  args: { color: "red" },
};

export const Blue: Story = {
  args: { color: "blue" },
};
