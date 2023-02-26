import { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";
import { DeepPartial } from "@reduxjs/toolkit";

describe("getCounterValue", () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 0 } };
    test("should return 10", () => {
        expect(getCounterValue(state as StateSchema)).toEqual(0);
    });
});
