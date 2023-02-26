import { CounterSchema } from "../types/counterSchema";
import { counterActions, counterReducer } from "./counterSlice";

describe("counter slice", () => {
    const state: CounterSchema = { value: 8 };
    test("should return 7", () => {
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 7 });
    });

    test("should return 9", () => {
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 9 });
    });
});
