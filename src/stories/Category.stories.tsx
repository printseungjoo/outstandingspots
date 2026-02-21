import type { Meta, StoryObj } from '@storybook/react';

import { Categories } from '../ui/atoms/Categories';

const meta: Meta<typeof Categories> = {
    title: 'Example/Category',
    component: Categories,
}

export default meta

type Story = StoryObj<typeof Categories>

export const Example1: Story = {
    args: {
        categoryName: '음식점',
    },
}

