import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader = buildBabelLoader(options);

    const cssLoader = buildCssLoader(isDev);

    // const babelLoader = {
    //     test: /\.(js|jsx|tsx)$/,
    //     exclude: /node_modules/,
    //     use: {
    //         loader: 'babel-loader',
    //         options: {
    //             presets: ['@babel/preset-env'],
    //             plugins: [
    //                 [
    //                     'i18next-extract',
    //                     {
    //                         locales: ['en', 'ru'],
    //                         keyAsDefaultValue: true,
    //                     },
    //                 ],
    //                 isDev && require.resolve('react-refresh/babel')
    //             ].filter(Boolean),
    //         },
    //     },
    // };

    // const cssLoader = {
    //     test: /\.s[ac]ss$/i,
    //     use: [
    //         // Creates `style` nodes from JS strings
    //         // 'style-loader',
    //         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    //         // Translates CSS into CommonJS
    //         // 'css-loader',
    //         {
    //             loader: 'css-loader',
    //             options: {
    //                 modules: {
    //                     auto: (resPath: string) => Boolean(resPath.includes('.module.')),
    //                     localIdentName: isDev
    //                         ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
    //                 },
    //                 // modules: true,
    //                 // auto: (resPath: string) => Boolean(resPath.includes('.module.')),
    //                 // localIdentName: isDev
    //                 //   ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
    //             },
    //         },
    //         // Compiles Sass to CSS
    //         'sass-loader',
    //     ],
    // };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
