import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
// Light.decoratos = [StoreDecorator({

// })];
export const Dark = Template.bind({});
Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
Dark.decorators = [ThemeDecorator(Theme.DARK)];
