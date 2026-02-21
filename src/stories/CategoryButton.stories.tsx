import type { Meta, StoryObj } from '@storybook/react';

import { CategoryButtons } from '../ui/molecules/CategoryButtons';

const meta: Meta<typeof CategoryButtons> = {
    title: 'Example/CategoryButton',
    component: CategoryButtons,
}

export default meta

type Story = StoryObj<typeof CategoryButtons>

export const Example1: Story = {
    args: {
        categoryName: "음식점",
    }
}