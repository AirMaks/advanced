import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginEmail } from "./getLoginEmail";

describe("getLoginEmail.test", () => {
    test("should return goldman@mail.com", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                email: "goldman@mail.com"
            }
        };
        expect(getLoginEmail(state as StateSchema)).toEqual("goldman@mail.com");
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginEmail(state as StateSchema)).toEqual("");
    });
});
