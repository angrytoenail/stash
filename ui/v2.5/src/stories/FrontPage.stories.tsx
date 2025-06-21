import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToastProvider } from "../hooks/Toast";
import FrontPage from "../components/FrontPage/FrontPage";

const meta = {
  component: FrontPage,
} satisfies Meta<typeof FrontPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};
