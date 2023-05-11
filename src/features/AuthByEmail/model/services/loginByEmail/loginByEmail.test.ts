import axios from "axios";
import { loginByEmail } from "./loginByEmail";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios);
describe("loginByEmail.test", () => {
    const userValue = {
        email: "goldman@mail.com",
        id: 1,
        token: "1234"
    };
    test("success login", async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = TestAsyncThunk(loginByEmail);
        const result = await thunk.callThunk({ email: "goldman@mail.com", password: "12345" });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userValue);
    });

    test("error login", async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 400 }));
        const thunk = TestAsyncThunk(loginByEmail);
        const result = await thunk.callThunk({ email: "goldman@mail.com", password: "12345" });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual(undefined);
    });
});
