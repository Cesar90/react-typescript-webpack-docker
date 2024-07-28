import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default {
    // resolve: {
    //     modules: [path.resolve(__dirname, 'src'), 'node_modules']
    // },
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        // '@storybook/addon-essentials',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config: Configuration) => {
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

        const paths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
        };
        config!.resolve!.modules!.push(paths.src);
        config!.resolve!.extensions!.push('.ts', '.tsx');
        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': paths.src,
        };

        // eslint-disable-next-line no-param-reassign
        // @ts-ignore
        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });

        config!.module!.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        config!.module!.rules.push(buildCssLoader(true));

        config!.plugins!.push(new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://cesar-catchup-jsonserver.vercel.app/'),
            __PROJECT__: JSON.stringify('storybook'),
        }));

        config!.resolve!.plugins?.push(new TsconfigPathsPlugin());
        return config;
    },
};
