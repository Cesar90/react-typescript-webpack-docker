import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode,
        // entry: {
        //     RANDOM: path.resolve(__dirname, 'src', 'index.js')
        // },
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        // devtool: isDev ? 'inline-source-map' : undefined,
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
