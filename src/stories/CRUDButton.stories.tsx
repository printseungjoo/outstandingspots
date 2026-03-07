import type { Meta, StoryObj } from '@storybook/react';

import { CRUDButtons } from '../ui/atoms/CRUDButtons';

const meta: Meta<typeof CRUDButtons> = {
    title: 'Example/CRUDButtons',
    component: CRUDButtons
};

export default meta;

type Story = StoryObj<typeof CRUDButtons>

export const Example1: Story = {
    args: {}
}