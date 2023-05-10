import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: "/node_modules/",
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["en", "ru"],
                            keyAsDefaultValue: true,
                            saveMissing: true, // save any missing translations to the translation file
                            discardOldKeys: false, // removes translation keys that are no longer used in the code
                            removeUnusedKeys: false, // removes translation keys that have never been used in the code
                            outputPath: "public/locales/{{locale}}/{{ns}}.json"
                        }
                    ]
                ]
            }
        }
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
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

    return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
}
