import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: false,
        historyApiFallback: true,
        host: "0.0.0.0",
        proxy: {
            "/api": {
                target: "https://test.spa.eam.austria.smprojects.ru",
                secure: false,
                changeOrigin: true
            }
        }
    };
}
