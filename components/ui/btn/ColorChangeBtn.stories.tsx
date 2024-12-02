import type { Meta, StoryObj } from "@storybook/react";

import ColorChangeBtn from "./ColorChangeBtn";

const meta: Meta<typeof ColorChangeBtn> = {
  component: ColorChangeBtn,
};

export default meta;
type Story = StoryObj<typeof ColorChangeBtn>;

export const Default: Story = {
  args: {},
};
