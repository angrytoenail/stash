import type { Meta, StoryObj } from '@storybook/react-vite';

import { SettingsButton } from './SettingsButton';

const meta = {
  component: SettingsButton,
} satisfies Meta<typeof SettingsButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};