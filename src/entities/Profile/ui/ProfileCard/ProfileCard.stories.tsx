import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import Avatar from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Nicaragua,
        lastname: 'Cordero',
        name: 'Cesar',
        city: 'Managua',
        currency: Currency.USD,
        avatar: Avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
