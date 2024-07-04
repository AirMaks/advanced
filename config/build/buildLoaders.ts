import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import ReactRefreshTypeScript from "react-refresh-typescript";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: "/node_modules/",
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
        }
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: "ts-loader",
                options: { transpileOnly: true }
            }
        ],

        exclude: "/node_modules/"
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        type: "asset"
    };

    const cssLoader = buildCssLoader(isDev);

    const reactRefreshLoader = {
        test: /\.[t]sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "ts-loader",
                options: {
                    getCustomTransformers: () => ({
                        before: [ReactRefreshTypeScript()].filter(Boolean)
                    }),
                    transpileOnly: true
                }
            }
        ]
    };

    return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader, reactRefreshLoader];
}
