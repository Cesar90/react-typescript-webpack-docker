import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CurrenctySelect } from './CurrenctySelect';

export default {
    title: 'entities/CurrenctySelect',
    component: CurrenctySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CurrenctySelect>;

const Template: ComponentStory<typeof CurrenctySelect> = (args) => <CurrenctySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
