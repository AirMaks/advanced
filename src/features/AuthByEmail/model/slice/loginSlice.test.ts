import { DeepPartial } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice.test", () => {
    test("test set username", () => {
        const state: DeepPartial<LoginSchema> = { email: "goldman" };
        expect(loginReducer(state as LoginSchema, loginActions.setEmail("goldman@mail.com"))).toEqual({ email: "goldman@mail.com" });
    });

    test("test set password", () => {
        const state: DeepPartial<LoginSchema> = { password: "123" };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword("123123"))).toEqual({ password: "123123" });
    });
});
