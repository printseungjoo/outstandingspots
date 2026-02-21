import type { Meta, StoryObj } from '@storybook/react';

import { LanguageButtons } from '../ui/molecules/LanguageButtons';

const meta: Meta<typeof LanguageButtons> = {
    title: 'Example/LanguageButton',
    component: LanguageButtons,
};

export default meta;

type Story = StoryObj<typeof LanguageButtons>

export const Example1: Story = {
    args: {},
}