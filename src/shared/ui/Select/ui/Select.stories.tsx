import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';
import SelectImg from './storybook.jpg';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'testtt',
    options: [
        {
            value: '123',
            content: 'Managua',
        },
        {
            value: '1234',
            content: 'Test',
        },
    ],
};
