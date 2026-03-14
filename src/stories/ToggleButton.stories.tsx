import type { Meta, StoryObj } from '@storybook/react';

import { ToggleButton } from '../ui/atoms/ToggleButton';

const meta: Meta<typeof ToggleButton> = {
    title: 'Example/ToggleButton',
    component: ToggleButton
}

export default meta;

type Story = StoryObj<typeof ToggleButton>

export const Example1: Story = {
    args: {}
}