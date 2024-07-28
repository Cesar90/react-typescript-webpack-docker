import { ComponentMeta, ComponentStory } from '@storybook/react';
// import withMock from 'storybook-addon-mock';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    // decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...(args as Record<string, unknown>)} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Title test',
                    description: 'Description test',
                },
                {
                    id: '2',
                    title: 'Title test 2',
                    description: 'Description test 2',
                },
                {
                    id: '3',
                    title: 'Title test 3',
                    description: 'Description test 3',
                },
            ],
        },
    ],
};
