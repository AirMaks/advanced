import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { TOKEN_LOCALSTORAGE_KEY, USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByEmailProps {
    email: string;
    password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps, ThunkConfig<string>>("login/loginByEmail", async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    try {
        const response = await extra.api.post<User>("/auth", authData);

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, response.data.token);
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
        dispatch(userActions.setAuthData(response.data));
        extra.navigate("/profile");
        return response.data;
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
