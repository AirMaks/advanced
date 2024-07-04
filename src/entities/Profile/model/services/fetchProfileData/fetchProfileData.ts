import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchProfileData = createAsyncThunk<any, void, ThunkConfig<string>>("profile/fetchProfileData", async (_, thunkApi) => {
    const { extra } = thunkApi;
    // try {
    const response = await extra.api.get<any>("/profile");

    return response.data;
    // } catch (e) {
    //     return rejectWithValue(e.response.data.message);
    // }
});
