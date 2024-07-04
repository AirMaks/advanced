import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "entities/User";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";
import { CombinedState, Reducer } from "redux";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer
    };
    const reducerManager = createReducerManager(rootReducers);
    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate
    };
    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg
                }
            })
    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

const store = createReduxStore();
type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
