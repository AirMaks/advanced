import { lazy } from "react";
// delay emulation remove later
// @ts-ignore
export const MainPageAsync = lazy(() => new Promise(resolve => setTimeout(() => resolve(import("./MainPage")), 500)));
