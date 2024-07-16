const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-mock/register'
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config) => {
        config.watchOptions = {
            aggregateTimeout: 200,
            poll: 1000,
        };
        // config.resolve.modules.push(path.resolve(__dirname, './src'));
        // config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'));
        // return config;

        // config.resolve.alias = {
        //     ...config.resolve.alias,
        //     'entities': path.resolve(__dirname, '..', '..', 'src', 'entities'),
        // };
        config.resolve.plugins = [new TsconfigPathsPlugin()];
        return config;
    },
};
