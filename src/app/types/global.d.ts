declare module "*.scss" {
    const css: { [key: string]: string };
    export default css;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
    import { VFC, SVGProps } from "react";
    const SVG: VFC<SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
