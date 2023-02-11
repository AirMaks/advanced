import { lazy } from "react";
// delay emulation remove later
// @ts-ignore
export const AboutPageAsync = lazy(() => new Promise(resolve => setTimeout(() => resolve(import("./AboutPage")), 500)));
