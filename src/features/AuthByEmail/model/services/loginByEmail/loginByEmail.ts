import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { TOKEN_LOCALSTORAGE_KEY, USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByEmailProps {
    email: string;
    password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps, { rejectValue: string }>("login/loginByEmail", async (authData, thunkAPI) => {
    try {
        const response = await axios.post<User>("http://localhost:3000/api/auth", authData);

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, response.data.token);
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
        thunkAPI.dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue("Login error");
    }
});
