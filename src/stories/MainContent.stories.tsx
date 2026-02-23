import type { Meta, StoryObj } from '@storybook/react';

import { MainContent } from '../ui/organisms/MainContent';

const meta: Meta<typeof MainContent> = {
    title: 'Example/MainContent',
    component: MainContent
}

export default meta;

type Story = StoryObj<typeof MainContent>

export const Example1: Story = {
    args: {}
}