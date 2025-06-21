import type { Meta, StoryObj } from "@storybook/react-vite";

import { MainNavbar } from "./MainNavbar";

const meta = {
  component: MainNavbar,
} satisfies Meta<typeof MainNavbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
