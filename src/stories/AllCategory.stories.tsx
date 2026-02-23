import type { Meta, StoryObj } from '@storybook/react';

import { AllCategories } from '../ui/molecules/AllCategories';

const meta: Meta<typeof AllCategories> = {
    title: 'Example/AlLCategory',
    component: AllCategories
}

export default meta;

type Story = StoryObj<typeof AllCategories>

export const Example1: Story = {
    args: {}
}