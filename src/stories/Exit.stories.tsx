import type { Meta, StoryObj } from '@storybook/react';

import { Exits } from '../ui/atoms/Exits';

const meta: Meta<typeof Exits> = {
    title: 'Example/Exit',
    component: Exits,
}

export default meta

type Story = StoryObj<typeof Exits>

export const Example1: Story = {
    args: {},
}