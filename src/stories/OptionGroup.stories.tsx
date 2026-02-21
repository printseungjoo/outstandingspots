import type { Meta, StoryObj } from '@storybook/react';

import { OptionGroups } from '../ui/molecules/OptionGroups';

const meta: Meta<typeof OptionGroups> = {
    title: 'Example/OptionGroup',
    component: OptionGroups
};

export default meta;

type Story = StoryObj<typeof OptionGroups>

export const Example1: Story = {
    args:{}
}